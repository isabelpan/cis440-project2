import React, { useState, useEffect } from 'react';
import { Navbar, Sidebar, Goals, GoalForm } from '../components';
import { HiPlus } from 'react-icons/hi';
import { FaEdit } from 'react-icons/fa';
import { Progress, ButtonGroup, Button } from 'rsuite';
import axios from 'axios';


const GoalsPage = () => {
  const [userGoalData, setUserGoalData] = useState({});
  const userInfo = JSON.parse(localStorage.getItem('user_info'));

  const [percent, setPercent] = useState(50);
  const [buttonPopup, setButtonPopup] = useState(false);

  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#03D613" : "#771be7";
  
  const decrease = () => {
    const value =
        Math.max(percent - 10, 0);
    setPercent(value);
};

  const increase = () => {
      const value =
          Math.min(percent + 10, 100);
      setPercent(value);
  };

  const getAccomplishedGoals = () => {
    console.log("getting goals");
    axios.get('./goals').then(response => {setUserGoalData(JSON.parse(JSON.stringify(response.data)));
    })
  }

  useEffect(() => {
    getAccomplishedGoals();
  }, []);


  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>

        <div className ='w-2/12 fixed sidebar bg-white'>
          <Sidebar />
        </div>
      
      </div>

      <div id='pageContainer' className='w-10/12 float-right py-14 px-10'>

        <div className='flex flex-col gap-7 border-2 border-violet-300 py-5 px-10 rounded-xl shadow-lg'>
          <div className='flex flex-row h-1/2 w-full items-center pb-2 justify-between '>
            <div className='text-violet-600 font-bold text-3xl'>
              <h1>Current Goals</h1>
            </div>
          

            <div className='flex flex-row text-violet-600 ease-out duration-300 hover:text-violet-900 text-xl gap-1'>
              <HiPlus className='mt-1'/>
              <button onClick={() => { setButtonPopup(true)}} type='button'>New Goal</button>
              <GoalForm trigger={buttonPopup} setTrigger={setButtonPopup}/>
            </div>
          </div>

          <div id='goalsContainer' className='flex flex-row gap-8'>
            <Goals />          
          </div>

        </div>

        <div className='flex flex-row mt-10 w-full justify-between gap-20'>

          <div id='accomplishedGoalsContainer' className='w-1/2 flex flex-col gap-6 border-2 py-5 px-10 rounded-xl border-violet-300 shadow-lg justify-between'>
            <div className='text-violet-600 text-3xl font-bold'>
              <h1>Goals You Have Accomplished</h1>
            </div>

            <div id='accomplishedGoalsList' className='w-full flex flex-col gap-2'>

            {/* {userGoalData.map((data) => {
                  return ( */}
                    <div className='border-2 py-1 px-2 rounded-md bg-violet-100 flex flex-row justify-between'>
                      <h1>Goal Title</h1>
                      <button>
                        <FaEdit className='text-gray-500' />
                      </button>
                      
                    </div>
                  {/* )
                })} */}

              
            </div>

            <div>
              <button className='border-2 rounded-md py-2 w-full font-semibold bg-white text-violet-500 active:bg-violet-500 active:text-violet-900 active:border-violet-500 ease-out duration-300 hover:bg-violet-700 hover:border-violet-700  hover:scale-105 border-violet-500 shadow-md hover:shadow-lg hover:text-white mt-2'>Clear Goals</button>
            </div>
          </div>

          <div id='progressContainer' className='w-1/2 flex flex-col gap-6 border-2 py-5 px-10 rounded-xl border-violet-300 shadow-lg'>
            <div className='text-violet-600 text-3xl font-bold'>
              <h1>Your Progress</h1>
            </div>

            <div id='progressBar' className='flex flex-col gap-4 items-center border-2 py-3 rounded-md border-violet-800' >

                {/* <ButtonGroup className='flex flex-row gap-3' >
                  <Button onClick={decrease} className="border-2 border-violet-200 rounded-md px-5">-</Button>
                  <Button onClick={increase} className="border-2 border-violet-200 rounded-md px-5">+</Button>
                </ButtonGroup> */}


                
                <Progress.Circle percent={percent} strokeColor={color} status={status} strokeWidth={10} trailColor={'#b5b5b549'} trailWidth={10} showInfo={true} className='w-1/3 flex flex-col gap-2 text-violet-800'/>
  

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GoalsPage