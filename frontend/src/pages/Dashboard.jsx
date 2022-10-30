import React from 'react'
import { Calendar, Navbar, Sidebar } from '../components';
import { FaShareSquare } from 'react-icons/fa';


const Dashboard = () => {
  var date = new Date();
  const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  var today = date.toLocaleDateString("en-US", dateOptions)

  return (
    <div>
      {/* navbar and sidebar container  */}
      <div>
        <div>
          <Navbar />
        </div>

        <div className ='w-15 fixed sidebar bg-white'>
          <Sidebar />
        </div>
      </div>

      {/* dashboard page container  */}
      <div className='ml-72 pt-36 mr-8'>

        {/* dashboard headers container */}
        <div className='flex flex-row justify-between'>
          {/* welcome/date container */}
          <div className='gap-1 flex flex-col'> 
            <h1 className='font-bold text-4xl text-violet-700'>Welcome Back</h1>
            <h1 className='text-xl font-bold text-gray-500'>Today is {today} </h1>
          </div>

          <div className='flex flex-row gap-1 text-violet-600 hover:cursor-pointer hover:text-violet-900 ease-out duration-300'>
            <h1>Share your dashboard</h1>
            <FaShareSquare className='text-xl'/>
          </div>
        </div>

        <div className='mt-10 text-gray-400'>
          <h1>A glance at your week</h1>
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard