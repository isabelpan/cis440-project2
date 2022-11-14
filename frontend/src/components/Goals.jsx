import React, { useState } from 'react';
import { Progress, ButtonGroup, Button } from 'rsuite';



const NewGoal = () => {

  const [percent, setPercent] = useState(50);
  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#03D613" : "#771be7";

  const [incompleteGoals, setIncompleteGoals] = useState([]);

  var currentGoal


  const increase = () => {
    const value =
        Math.min(percent + 10, 100);
    setPercent(value);
};

const completeGoal = () => {
  setIncompleteGoals(incompleteGoals.filter((g) => g['goalId'] !== currentGoal.goalId))
  setIncompleteGoals([...completeGoal, currentGoal]);
};
  
  return (
    <div className='flex flex-col gap-3 w-1/5 border-2 border-violet-700 rounded-lg p-4 hover:scale-105 ease-in-out duration-300 max-w-screen-sm'>
        <div className='text-2xl text-violet-800 font-bold border-b-1 border-gray-300'>
            <h1>TITLE</h1>
        </div>
        <div className='text-lg'>
            DESCRIPTION
        </div>

        <div className='flex justify-around'>
          <ButtonGroup>
            <Button onClick={completeGoal} className='pt-3 ease-out duration-300 text-violet-800 hover:text-violet-600 text-lg'>Goal Completed</Button>
          </ButtonGroup>
            
        </div>
    </div>
  )
}


const Goals = () => {
  return (
    <>
      {/* {incompleteGoals.map((goal) => {

      })} */}
    </>
  )
}

export default Goals