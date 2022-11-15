import React, { useState, useEffect} from 'react'
import { Calendar, Navbar, Sidebar } from '../components';
import { FaShareSquare } from 'react-icons/fa';
import DashboardKeyModal from '../components/DashboardKeyModal';
import axios from 'axios';
import TasksSummary from '../components/TasksSummary';
import GoalsSummary from '../components/GoalsSummary';
import FeedbackSummary from '../components/FeedbackSummary';
import { Progress, ButtonGroup, Button } from 'rsuite';





const Dashboard = () => {

  const [buttonPopup, setButtonPopup] = useState(false);


    const userInfo = JSON.parse(sessionStorage.getItem('user_info'))






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
            <h1 className='font-bold text-4xl text-violet-700'>Welcome Back {userInfo?.fname}</h1>
            <h1 className='text-xl font-bold text-gray-500'>Today is {today} </h1>
          </div>

          <div id='shareDashboardContainer' className='flex flex-row gap-1 text-violet-600 hover:cursor-pointer hover:text-violet-900 ease-out duration-300 pt-12'>
            <button onClick={() => { setButtonPopup(true)}} type='button'>Share your dashboard</button>
            <DashboardKeyModal trigger={buttonPopup} setTrigger={setButtonPopup}/>          </div>
         </div>



          <div id='containerContainer' className='flex flex-row h-full'>
            <div id='tasksContainer' className='text-gray-400 w-7/12 flex px-4 border-3 border-violet-400 rounded-lg py-3 shadow-lg flex-col gap-3 bg-white mx-2'>
              <TasksSummary/>
            </div>
            
            <div className='text-gray-400 w-5/12 flex px-4 border-3 border-violet-100 rounded-lg py-3 shadow-lg flex-col gap-3 bg-white'>
              <div className='content-center text-gray-400 w-fill flex px-4 border-3 border-violet-300 rounded-lg py-3 shadow-lg flex-col gap-3 bg-white h-3/4 text-wrap'>

                <GoalsSummary/>

              </div>
              <div className='text-gray-400 w-fill flex px-4 border-3 border-violet-300 rounded-lg py-3 shadow-lg flex-col gap-3 bg-white h-1/4'>
                  <FeedbackSummary/>
              </div>

            </div>
            

          </div>

          
          

        </div>
        
      </div>
    </div>
  )
}

export default Dashboard