import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import axios from 'axios';

const DashboardKeyModal = (props) => {

    const dashboardKey = JSON.parse(sessionStorage.getItem('user_info'))?.dashboardKey

    



  const inputField = 'border-2 rounded-md px-3 py-1 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-gray-700 max-h-24 bg-gray-100 focus:bg-white ease-out duration-300 shadow-md text-lg';
  const inputContainer = 'flex flex-col gap-1';

  return (props.trigger) ? (
    <div id='popup' className='w-full fixed top-0 left-0 h-screen bg-gray-500/75 flex justify-center items-center text-violet-600'>
      <div id='popupInner' className='relative p-8 w-full max-w-screen-sm bg-white rounded-lg  flex flex-col gap-6'>
        <div className='font-bold text-3xl'>
          <h1>Hello!</h1>
        </div>
        <div>
            <p className='text-lg'>To get started collaborating, share the dashboard key with your mentor/mentee. They will need this key when creating an account!</p>
        </div>
        <div>
            <p className='text-lg'>your dashboard key is...</p>
            <p className='font-bold text-3xl'>{dashboardKey}</p>
        </div>
        
        <button onClick={() => {props.setTrigger(false)}} className='absolute top-4 right-4 hover:'><AiOutlineCloseCircle className='text-2xl'/></button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default DashboardKeyModal