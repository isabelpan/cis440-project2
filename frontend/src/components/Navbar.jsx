import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const isLoggedIn = () => {

  if(localStorage.length === 1 ){
    const user = JSON.parse(localStorage.getItem(''));

    console.log('User is logged in.');
    console.log(user['username']);
    return(true);
  }
  else{
    console.log('User is not logged in.');
    return(false)
  }
}

const LoggedInContainer = ({ username, customFunc }) => {
  return(
    <div className='flex flex-col'>

        <div className='flex pt-2 text-xl'>

          <FaUserAlt className=' mr-2'/>
          <h1>Welcome back, {username}!</h1>
                
        </div>

        <button onClick={customFunc} className='text-md text-right'>Logout</button>

      </div>  
  )

}

const LoggedOutContainer = () => {
  return(
    <div className='flex gap-3 items-center justify-between'>
      <Link to='/register' className='border-2 border-mintgreen rounded-xl mx-2.5 flex text-gold h-16 items-center no-underline px-4 gap-2'>
          <span>Register</span>
      </Link>

      <Link to='/login' className='border-2 border-mintgreen rounded-xl mx-2.5 flex text-gold h-16 items-center no-underline px-4 gap-2'>
          <span>Login</span>
      </Link>
    </div>
  )

}

const Navbar = () => {
  return (
    <div className='flex justify-between flex-row p-5 shadow-md float-right w-85'>
      <Link to='/' className='hover:no-underline'>
        <div className='gap-3 flex items-center no-underline justify-between my-0 mx-2.5 text-3xl cursor-pointer'>
          {/* <GiAbstract119 /> */}
          <h1 className='font-bold pt-2'>Dashboard</h1>
        </div>
      </Link>

      <div className='flex flex-col pr-2'>
        <div className='flex pt-2 text-xl gap-2'>
          <FaUserAlt className='mt-1'/>
          <h1 className='font-bold '>Welcome back,</h1> <h1>User!</h1>
        </div>
        <button type='button' className='text-right hover:text-blue-600'>Logout</button>
      </div> 

        
    </div>
  )
}

export default Navbar