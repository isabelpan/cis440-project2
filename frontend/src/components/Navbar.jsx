import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';


const LoggedInContainer = ({ username, customFunc }) => {
  return(
      <div className='flex flex-col pr-2'>

        <div className='flex pt-2 text-xl gap-2'>
          <FaUserAlt className='mt-1'/>
          <h1 className='font-bold '>Welcome back,</h1> <h1>User!</h1>
        </div>

        <button type='button' className='text-right hover:text-blue-700'>Logout</button>
      </div> 
  )

}

const LoggedOutContainer = () => {
  return(
    <div className='flex items-center justify-between'>
      <Link to='/login' className='rounded-lg mx-2.5 flex h-11 items-center no-underline px-4 gap-2 hover:text-blue-700'>
          <span>Login</span>
      </Link>

      <Link to='/register' className='rounded-lg mx-2.5 flex h-11 items-center no-underline px-4 gap-2 bg-gray-300 text-blue-700 hover:bg-gray-400 hover:text-blue-900 font-bold'>
          <span>Register</span>
      </Link>
    </div>
  )

}

const Navbar = () => {

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
  } // end of isLoggedIn func

  const logoutFunc = () => {
    localStorage.clear('user_info');
  
    window.location.reload();
  }

  const checkLogin = () => {
    if(isLoggedIn()){
      const user = JSON.parse(localStorage.getItem('user_info'));

      console.log('logged in')
      console.log(user['username']);

      return(<LoggedInContainer username={user['username']} customFunc={logoutFunc} />);
    }
    else{
      console.log('not logged in');

      return(<LoggedOutContainer />);
    }
  }; // end of checkLogin


  return (
    <div className='flex justify-between flex-row p-5 shadow-md float-right w-85'>
      <Link to='/' className='hover:no-underline'>
        <div className='gap-3 flex items-center no-underline justify-between my-0 mx-2.5 text-3xl cursor-pointer'>
          {/* <GiAbstract119 /> */}
          <h1 className='font-bold pt-2'>Dashboard</h1>
        </div>
      </Link>

      {/* <div className='flex flex-col pr-2'>
        <div className='flex pt-2 text-xl gap-2'>
          <FaUserAlt className='mt-1'/>
          <h1 className='font-bold '>Welcome back,</h1> <h1>User!</h1>
        </div>
        <button type='button' className='text-right hover:text-blue-600'>Logout</button>
      </div>  */}

      <div>
        {checkLogin()}
      </div>

        
    </div>
  )
}

export default Navbar