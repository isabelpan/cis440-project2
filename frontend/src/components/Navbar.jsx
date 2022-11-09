import React from 'react'
import { NavLink as Link, useLocation } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import Modal from '../pages/LoginModal';



const LoggedInContainer = ({ username, customFunc }) => {
  return(
    <div className='flex flex-col pr-2'>
      <div className='flex pt-2 text-xl gap-2 text-violet-600'>
        <FaUserAlt className='mt-1 text-lg'/>
        <h1 className='font-bold'>{username}</h1>
      </div>

      <button type='button' onClick={customFunc} className='text-right text-gray-400 hover:text-gray-900 ease-out duration-300'>Logout</button>
  </div> 
  )

}

const LoggedOutContainer = () => {
  return(
    <div className='flex items-center justify-between'>
      <Link to='/login' className='rounded-lg mx-2.5 flex h-11 items-center no-underline px-4 gap-2 hover:text-violet-600'>
          <span>Login</span>
      </Link>

      <Link to='/register' className='rounded-lg mx-2.5 flex h-11 items-center no-underline px-4 gap-2 bg-gray-200 text-violet-600 hover:bg-gray-300 hover:text-violet-900 font-bold'>
          <span>Register</span>
      </Link>
    </div>
  )

}


const Navbar = () => {



  const isLoggedIn = () => {

    if(sessionStorage.length === 1 ){
      const user = JSON.parse(sessionStorage.getItem('user_info'));
      console.log(user)
  
      console.log('User is logged in.');
      console.log(user['fname']);
      return(true);
    }
    else{
      console.log('User is not logged in.');
      return(false)
    }
  }; // end of isLoggedIn func

  const logoutFunc = () => {
    sessionStorage.clear('user_info');
  
    window.location.reload();
  }; // end of logoutFunc 

  const checkLogin = () => {
    if(isLoggedIn()){
      const user = JSON.parse(sessionStorage.getItem('user_info'));

      console.log('logged in')
      console.log(user['fname']);

      return(<LoggedInContainer fname={user['fname']} customFunc={logoutFunc} />);
    }
    else{
      console.log('not logged in');

      return(<LoggedOutContainer />);
    }
  }; // end of checkLogin


  const GetRoute = () => {
    const location = useLocation();
    const currentRoute = location.pathname.substr(1,);
  
    return(<h1 className='font-bold pt-2 capitalize'>{currentRoute}</h1>)
  
  
  }

  return (
    <div className='flex justify-between flex-row p-5 shadow-md float-right w-85'>
        <div className='gap-3 flex items-center no-underline justify-between my-0 mx-2.5 text-3xl cursor-pointer'>
          {GetRoute()}
        </div>




        {/* <div className='flex flex-col pr-2'>
          <div className='flex pt-2 text-xl gap-2 text-violet-600'>
            <FaUserAlt className='mt-1 text-lg'/>
            <h1 className='font-bold'>fname</h1>
          </div>

          <button type='button'className='text-right text-gray-400 hover:text-gray-900 ease-out duration-300'>Logout</button>
        </div>  */}



      <div>
        {checkLogin()}
      </div>

    </div>

  )
}

export default Navbar