import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { GiAbstract119 } from 'react-icons/gi';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const toastOptions = { 
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  }

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (event) => {
    console.log('handling submit')
    event.preventDefault();

    if(handleValidation()){
      const { password, email } = values;
      console.log(values)
      
      // Error handling copied from axios docs except for toasts
      const { data } = await axios.post('./login', {  // Check for login route './login'
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

      console.log(data)
      if(data['status'] === 0){
        console.log('logged in')
        localStorage.setItem("user_info", JSON.stringify(data))
        navigate("/dashboard")
      }else 
      if(data['status'] === 2){
        toast.error("Email not found, try again or create an account", toastOptions)
      }else
      if(data['status'] === 3){
        toast.error("Incorrect password", toastOptions)
      }else{
        toast.error("Somethings wrong on our end...\ntry again later", toastOptions)
      }
      
    };

  }; 
  // end of handleSubmit 

  const handleValidation = () => {
    const {password, email} = values;
    if(email === ""){
      toast.error("Please enter your email.", toastOptions);
      return false;
    }
    else if(password===""){
      toast.error("Please enter your password.", toastOptions);
      return false;
    }
    return true;

  }; //end of handleValidation 

  const handleChange = (event) => {
    setValues({...values, [event.target.name]:event.target.value});
  }

  return (
    <div className='flex w-screen'>
      <div className='w-1/2 h-screen flex flex-row text-5xl justify-center items-center bg-gradient-to-b from-blue-700 via-purple-500 to-violet-300 text-white gap-5'>
          <GiAbstract119 className='text-8xl'/>
          <div>
            <h1>Welcome to</h1>
            <h1>Mellow Mentorship</h1>
          </div>
      </div>

      <div className='w-1/2 flex flex-col items-center justify-center' >
        <form onSubmit={(event) => handleSubmit(event)} className='rounded-lg bg-white w-3/4 p-10'>
          <div>
            <h1 className='font-bold text-4xl mb-8'><span className='text-violet-600'>Sign Into</span> Your Account</h1>
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

            <label htmlFor='password' className='text-lg'>Password</label>
            <input 
                name='password'
                type='password'
                placeholder='●●●●●●●●●●'
                required 
                className='h-10 border-1 border-gray-300 rounded-md px-2 shadow-md'
                onChange={(e) => handleChange(e)}
                />

            <button type='submit' className='border-2 border-gray-300 rounded-md h-10 mt-5 hover:bg-gray-400 hover:border-gray-400 hover:text-violet-600 shadow-md ease-out duration-300 hover:scale-105'>Login</button>

            <div className='mt-5'>
              <span> Don't have an account? <Link to='/register' className='text-violet-600 hover:text-violet-900 font-bold ease-out duration-200'>Register Now</Link></span>
              
            </div>
          </div>

        </form>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Login