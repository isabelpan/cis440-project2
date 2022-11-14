import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const EditGoalForm = (props) => {
    const [currentGoal, setCurrentGoal] = useState({});

  return (props.trigger) ? (
    <div className='w-full fixed top-0 left-0 h-screen bg-gray-500/75 flex justify-center items-center text-violet-600'>
        <div className='relative p-8 w-full max-w-screen-sm bg-white rounded-lg  flex flex-col gap-6'>

        <form>
            <div>
                <h1>{currentGoal.goalTitle}</h1>
            </div>
        </form>

        <button onClick={() => {props.setTrigger(false)}} className='absolute top-4 right-4 hover:'><AiOutlineCloseCircle className='text-2xl'/></button>
        { props.children }

        </div>
    </div>
  ) : "";
}

export default EditGoalForm