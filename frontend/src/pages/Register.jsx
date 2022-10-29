import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { GiAbstract119 } from 'react-icons/gi';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';



const Register = () => {
  const navigate = useNavigate();

        const toastOptions = { 
            position: "bottom-right",
            autoClose: 8000,
            pauseOnHover: true,
            draggable: true,
            theme: "light"
        }

        const [values, setValues] = useState({
          username: "",
          email: "",
          password: "",
          confirmedPass: "",
          chooseRole: ""
        })


        const handleSubmit = async(event) => {
          event.preventDefault();

        if(handleValidation()){
            const { password, email, username } = values;
            const { data } = await axios.post("/register", {
                username,
                email,
                password
                }).catch(function (error) {
                    if (error.response) {
                      // The request was made and the server responded with a status code
                      // that falls out of the range of 2xx
                      toast.error("Somethings wrong on our end...\ntry again later", toastOptions)
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                      // The request was made but no response was received
                      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                      // http.ClientRequest in node.js
                      toast.error("Somethings wrong on our end...\ntry again later", toastOptions)
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message);
                    }
                    console.log(error.config);
                  });

            if(data['status'] === 1){
            toast.error('Somethings wrong on our end...\ntry again later', toastOptions);
            }
            if(data['status'] === 2){
                toast.error('Email already taken\nuse a different email or log in', toastOptions);
                }
            if(data['status'] === 0){
                console.log('account created')
                localStorage.setItem("user_info", JSON.stringify(data))
                // navigate user to log in page or home page
                navigate("/")
                }

         }
      }

      const handleValidation = () => {
        const {password, confirmedPass, username, email} = values;
        if(password !== confirmedPass){
            toast.error("Passwords must match.", toastOptions);
            return false;
        }
        else if(password ===""){
            toast.error("Password is required.", toastOptions);
            return false;
        }
        else if(username.length < 3){
            toast.error("Username should be greater than 3 characters long.", toastOptions);
            return false;
        }
        else if(password.length < 8){
            toast.error("Password should be at least 8 characters long.", toastOptions);
            return false;
        }
        else if(email===""){
            toast.error("Email is required.", toastOptions);
            return false;
        }
        return true;
      } // end of handleValidation 

      const handleChange = (event) => {
          setValues({...values,[event.target.name]:event.target.value});
      }
  return (
    <div className='flex w-screen'>
      <div className='w-1/2 h-screen flex flex-row text-5xl gap-5 justify-center items-center bg-gradient-to-b from-blue-700 via-purple-500 to-violet-300 text-white'>
        <GiAbstract119 className='text-8xl'/>
        <div>
          <h1>Welcome to</h1>
          <h1>Mellow Mentorship</h1>

        </div>
      </div>

      <div className='w-1/2 flex flex-col  items-center justify-center' >
        <form onSubmit={(event) => handleSubmit(event)} className='rounded-lg bg-white w-3/4 p-10'>
          <div>
            <h1 className='font-bold text-4xl mb-8'><span className='text-violet-600'>Register</span> Your Account</h1>
            
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor='username' className='text-lg'>Username</label>
            <input
                name='username'
                type='text'
                placeholder='username1234'
                required 
                className='h-10 border-1 border-gray-300 rounded-md px-2 shadow-md'
                onChange={(e) => handleChange(e)}
            />

            <label htmlFor='email' className='text-lg'>Email</label>
            <input 
                name='email'
                type='email'
                placeholder='example@email.com'
                required
                className='h-10 border-1 border-gray-300 rounded-md px-2 shadow-md'
                onChange={(e) => handleChange(e)}
              />

            <label htmlFor='password' className='text-lg'>Password</label>
            <input 
                name='password'
                type='password'
                placeholder='●●●●●●●●●●'
                required 
                className='h-10 border-1 border-gray-300 rounded-md px-2 shadow-md'
                onChange={(e) => handleChange(e)}
              />

            <label htmlFor='confirmPassword' className='text-lg'>Confirm Password</label>
            <input 
                name='confirmPassword'
                type='password'
                placeholder='●●●●●●●●●●'
                required 
                className='h-10 border-1 border-gray-300 rounded-md px-2 shadow-md'
                onChange={(e) => handleChange(e)}
              />

              <label className='text-lg mt-2'>Are you a Mentor or Mentee?</label>
              <div className='flex flex-row gap-20'>
                <div className='flex gap-2'>
                  <label for='mentor' className='hover:cursor-pointer border-2 py-1 px-5 rounded-md' >Mentor</label>
                  <input type='radio' value='1' id='mentor' name='chooseRole'/>
                </div>
                
                <div className='flex gap-2'>
                  <label for='mentee' className=' hover:cursor-pointer border-2 py-1 px-5 rounded-md'>Mentee</label>
                  <input type='radio' value='2' id='mentee' name='chooseRole'/>
                </div>
                
              </div>
  

            <button type='submit' className='border-2 border-gray-300 rounded-md h-10 mt-5 hover:bg-gray-400 hover:border-gray-400 hover:text-violet-900 shadow-md'>Register</button>

            <div className='mt-5'>
              <span>Already have an account? <Link to='/login' className='text-violet-600 hover:text-violet-800 font-bold'>Sign in now</Link></span>
              
            </div>
          </div>

        </form>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Register