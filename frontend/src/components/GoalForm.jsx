import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import axios from 'axios';

const GoalForm = (props) => {

  const handleSubmit = (e) => {

    const userInfo = JSON.parse(sessionStorage.getItem('user_info'))
    console.log(userInfo);

    const newGoal = {
      goalTitle: e.target.goalTitle.value,
      goalDescription: e.target.goalDescription.value,
      isComplete: 0,
    }

    axios.post('http://localhost:9000/goals/add-goal', newGoal).then(response => {
      console.log(response.data);
    }).catch(error => console.log(error.message));

  };


  const inputField = 'border-2 rounded-md px-3 py-1 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-gray-700 max-h-24 bg-gray-100 focus:bg-white ease-out duration-300 shadow-md text-lg';
  const inputContainer = 'flex flex-col gap-1';

  return (props.trigger) ? (
    <div id='popup' className='w-full fixed top-0 left-0 h-screen bg-gray-500/75 flex justify-center items-center text-violet-600'>
      <div id='popupInner' className='relative p-8 w-full max-w-screen-sm bg-white rounded-lg  flex flex-col gap-6'>
        <div className='font-bold text-3xl'>
          <h1>New Goal</h1>
        </div>

        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
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
            <button className='border-2 rounded-md py-2 w-full font-semibold bg-white text-violet-500 active:bg-violet-500 active:text-violet-900 active:border-violet-500 ease-out duration-300 hover:bg-violet-700 hover:border-violet-700  hover:scale-105 border-violet-500 shadow-md hover:shadow-lg hover:text-white mt-5'>Create Goal</button>
          </div>
        </form>
        
        <button onClick={() => {props.setTrigger(false)}} className='absolute top-4 right-4 hover:'><AiOutlineCloseCircle className='text-2xl'/></button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default GoalForm