import React, { useState, useEffect } from 'react';
import { Navbar, Sidebar, GoalForm, EditGoalForm } from '../components';
import { HiPlus } from 'react-icons/hi';
import axios from 'axios';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const GoalsPage = () => {
  const userInfo = JSON.parse(sessionStorage.getItem('user_info'));

  // popup 
  const [buttonPopup, setButtonPopup] = useState(false);


  // goal list variables 
  const [goalList, setGoalList] = useState([]);
  const [completedGoals, setCompletedGoals] = useState([]);
  const [incompleteGoals, setIncompleteGoals] = useState([]);
  const [isGoalSelected, setIsGoalSelected] = useState(false);
  const [currentGoal, setCurrentGoal] = useState({});

  var userGoals;

  // progress bar variables
  let total = completedGoals.length + incompleteGoals.length;
  let numOfCompletedGoals = completedGoals.length;
  let totalPercent = Math.floor((numOfCompletedGoals / total) * 100) + '%';


  useEffect(() => {
    if(sessionStorage.length >= 1){
      axios.post('http://localhost:9000/goals/get-goals', userInfo).then(response => {
        console.log(response.data);
        sessionStorage.setItem("user_goals", JSON.stringify(response.data));

        userGoals = JSON.parse(sessionStorage.getItem("user_goals"));

        setGoalList(userGoals);

        setCompletedGoals(userGoals.filter((g) => g['completed'] === '1'));
        setIncompleteGoals(userGoals.filter((g) => g['completed'] === '0'))
      }).catch((error) => console.log(error.message));
    }
  }, []);


  const Goals = () => {

    const completeGoal = (goal) => {
      console.log(goal + 'Marking goal as complete.');
  
      axios.post('http://localhost:9000/goals/complete-goal', goal).then(response => {
        console.log(response.data);
      }).catch(error => console.log(error.message));


    }


    return(
      <div id='goalsContainer' className='flex flex-row gap-4'>
        {incompleteGoals.map((goal) => (
          <div className='flex flex-col gap-3 w-1/5 border-2 border-violet-600 rounded-lg p-4 hover:scale-105 ease-in-out duration-300 max-w-screen-sm max-w-1/5'>
              <div id='goalHeader'>
                <div className='border-b-1 border-gray-300 flex flex-row w-full items-center'>
                  <div className='text-xl text-violet-800 font-bold flex w-full'>
                    <h1 className='capitalize'>{goal['goalTitle']}</h1>
                  </div>
                </div>
              </div>
              
              <div id='goalDescription' className='text-lg'>
                  {goal['goalDescription']}
              </div>

              <div id='completeGoalBtn' className='block text-center'>
                  <button onClick={() => {completeGoal(goal)}} className='pt-3 ease-out duration-300 text-violet-800 hover:text-violet-600 text-lg'>Goal Completed</button>
              </div>
          </div>
        ))}
          
      </div>

    )
  }


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

      <div id='pageContainer' className='w-10/12 float-right py-14 px-10 h-full'>

        <div className='flex flex-col gap-7 border-3 border-violet-300 py-5 px-10 rounded-xl shadow-lg h-1/2'>
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

          <Goals />          


        </div>

        <div className='flex flex-row mt-10 w-full justify-between gap-20 h-1/2'>

          <div id='accomplishedGoalsContainer' className='w-1/2 flex flex-col gap-8 border-3 py-5 px-10 rounded-xl border-violet-300 shadow-lg h-full'>
            <div className='text-violet-600 text-3xl font-bold'>
              <h1>Goals You Have Accomplished</h1>
            </div>

            <div id='accomplishedGoalsList' className='w-full max-h-44 flex flex-col gap-3 overflow-auto rounded-lg'>

            {completedGoals.map((goal) => {
                  return (
                    <div className='border-2 py-2 px-2 rounded-md bg-violet-100 flex flex-row justify-between text-violet-400 line-through shadow-md'>
                      <h1 className='capitalize'>{goal['goalTitle']}</h1>

                    </div>
                   )
                })} 

              
            </div>

            <div>
              <button className='border-2 rounded-md py-2 w-full font-semibold bg-white text-violet-500 active:bg-violet-500 active:text-violet-900 active:border-violet-500 ease-out duration-300 hover:bg-violet-700 hover:border-violet-700  hover:scale-105 border-violet-500 shadow-md hover:shadow-lg hover:text-white mt-3'>Clear Accomplished Goals</button>
            </div>
          </div>

          <div id='progressContainer' className='w-1/2 flex flex-col gap-6 border-3 py-5 px-10 rounded-xl border-violet-300 shadow-lg'>
            <div>
              <div className='text-violet-600 text-3xl font-bold'>
                <h1>Your Progress</h1>
              </div>

              <div className='text-gray-500'>
                <h1>You have completed {numOfCompletedGoals} out of {total} goals</h1>
              </div>
            </div>
            

            <div>
              <div id='progressBar' className='flex flex-col gap-4 items-center py-3 px-5 rounded-lg  w-2/5 m-auto' >
                <CircularProgressbar 
                  maxValue={total} 
                  minValue={0} 
                  value={numOfCompletedGoals} 
                  text={totalPercent}
                  styles={{trail:{
                  stroke: '#b5b5b549',
                  strokeLinecap: 'butt',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                path:{
                  stroke: '#771be7'
                },
                text:{
                  fill: '#771be7',

                }}}/>
            </div>
            </div>

            
          </div>

        </div>
      </div>
    </div>
  )
}

export default GoalsPage