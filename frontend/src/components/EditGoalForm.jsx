import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const EditGoalForm = (props, title, description) => {
    const inputField = 'border-2 rounded-md px-3 py-1 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-gray-700 max-h-24 bg-gray-100 focus:bg-white ease-out duration-300 shadow-md text-lg placeholder:text-gray-600';
    const inputContainer = 'flex flex-col gap-1';

    const [currentGoal, setCurrentGoal] = useState({});
    const [updateGoal, setUpdateGoal] = useState({});

    const userInfo = JSON.parse(sessionStorage.getItem('user_info'));

    var updatedGoal 

    // useEffect(() => {
    //     if(sessionStorage.length >= 1){
    //         axios.post('http://localhost:9000/goals/update-goal', userInfo).then(response => {
    //           console.log(response.data);
    //           sessionStorage.setItem("goal_count", JSON.stringify(response.data));
      
    //           updatedGoal = JSON.parse(sessionStorage.getItem("updated_goal"));
      
    //             setUpdateGoal(updatedGoal);
    //         })
    //       }
    // }, [])

  return (props.trigger) ? (
    <div id='popup' className='w-full fixed top-0 left-0 h-screen bg-gray-400/75 opacity-75 flex justify-center items-center text-violet-600'>
        <div id='innerPopup' className='relative p-8 w-full max-w-screen-sm bg-white rounded-lg flex flex-col gap-6'>
        
        <div className='font-bold text-3xl'>
            <h1>Edit Goal</h1>
        </div>

        <form className='flex flex-col gap-3' >
          <div className={inputContainer}>
            <label htmlFor='goalTitle' className='text-lg'>Goal Title</label>
            <input 
              type='text' 
              name='goalTitle' 
              id='goalTitle'
              className={inputField}
             />
          </div>

          <div className={inputContainer}>
                <label htmlFor='goalDescription'className='text-lg'>Goal Description</label>
                <textarea 
                  type='text' 
                  name='goalDescription' 
                  id='goalDescription' 
                  className={inputField} 
                />
              </div>
            
            <div className='border-b-1 pt-4 border-gray-300'></div>

          <div className='flex flex-col'>
            <button type='submit' className='border-2 rounded-md py-2 w-full font-semibold bg-white text-violet-500 active:bg-violet-500 active:text-violet-900 active:border-violet-500 ease-out duration-300 hover:bg-violet-700 hover:border-violet-700  hover:scale-105 border-violet-500 shadow-md hover:shadow-lg hover:text-white mt-5'>Update</button>
          </div>
        </form>

        <button onClick={() => {props.setTrigger(false)}} className='absolute top-4 right-4 hover:'><AiOutlineCloseCircle className='text-2xl'/></button>
        { props.children }

        </div>
    </div>
  ) : "";
}

export default EditGoalForm