import React from 'react'
import { Calendar, Navbar, Sidebar } from '../components';
import { FaShareSquare } from 'react-icons/fa';


const Dashboard = () => {
  var date = new Date();
  const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  var today = date.toLocaleDateString("en-US", dateOptions)

  const shareDashboardLink = () => {

  }

  return (
    <div>
      {/* navbar and sidebar container  */}
      <div>
        <div>
          <Navbar />
        </div>

        <div className ='w-2/12 fixed sidebar bg-white'>
          <Sidebar />
        </div>
      </div>


      <div id='pageContainer' className='w-10/12 float-right py-14 px-10'>

        <div className='flex flex-col gap-10'>
          <div id='dashboardHeaderContainer' className='flex flex-row justify-between border-b-1 pb-2 border-gray-300'>

          <div id='welcomeDateContainer' className='gap-1 flex flex-col'> 
            <h1 className='font-bold text-4xl text-violet-700'>Welcome Back</h1>
            <h1 className='text-xl font-bold text-gray-500'>Today is {today} </h1>
          </div>

          <div id='shareDashboardContainer' className='flex flex-row gap-1 text-violet-600 hover:cursor-pointer hover:text-violet-900 ease-out duration-300 pt-12'>
            <button type='button' onClick={shareDashboardLink}>Share your dashboard</button>
            <FaShareSquare className='text-xl'/>
          </div>
         </div>

          <div id='calendarContainer' className='text-gray-400 w-full flex px-4 border-3 border-violet-400 rounded-lg py-3 shadow-lg flex-col gap-3 bg-white'>
            <h1>A glance at your week</h1>
            <Calendar />
          </div>

          <div id='bottomContainer' className='flex flex-row gap-8 justify-between'>
            <div id='upcomingTasksContainer' className='text-gray-400 border-3 border-violet-400 py-2 px-3 flex flex-col w-1/4 rounded-lg shadow-lg bg-white'>
            <h1>Your Upcoming Tasks</h1>

            </div>

            <div id='goalsContainer' className='text-gray-400 border-3 border-violet-400 py-2 px-3 rounded-lg w-1/4 shadow-lg bg-white flex flex-col'>
              <div>
                <h1>A Glance At Your Goals</h1>
              </div>

              <div>
                Your Progress
              </div>
              

            </div>

            <div className='text-gray-400 border-3 border-violet-400 py-2 px-3 rounded-lg w-1/4 shadow-lg bg-white flex flex-col'>
              <h1>Recent Feedback</h1>
            </div>


          </div>
          

        </div>
        
      </div>
    </div>
  )
}

export default Dashboard