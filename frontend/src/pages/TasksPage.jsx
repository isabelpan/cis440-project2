import React, { useState } from 'react';
import { MdSettingsBackupRestore } from 'react-icons/md';
import { Navbar, Sidebar, TaskForm, TaskList } from '../components';

const TasksPage = () => {
  const inputField = 'border-2 rounded-md px-3 py-2 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-gray-700 max-h-24 bg-gray-100 focus:bg-white ease-out duration-300 shadow-md';
  const inputContainer = 'flex flex-col gap-1';
  const taskHeader = 'text-3xl text-violet-700 font-bold';

  const [taskList, setTaskList] = useState('');

  const handleToggle = (id) => {
    let mapped = taskList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
      }
    );
    setTaskList(mapped);
  }

  // const handleFilter = () => {
  //   let filtered = taskList.filter(task => {
  //     return !task.complete;
  //   });
  //   setTaskList(filtered);
  // }

  const addTask = (task) => {
    let copy = [...taskList];
    copy = [...copy, { id: taskList.length +  1, task: task, complete: false }];
    setTaskList(copy);

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

      <div className='w-10/12 float-right h-full py-14 pl-10'>

        <div id='leftContainer' className='flex flex-col gap-16 w-2/5 float-left h-full' >
          <TaskForm addTask={addTask}/>
        </div>

        <div id='rightContainer' className=' w-1/2 h-full float-right rounded-lg mr-10 flex flex-col gap-10 '>

          <div id='currentTasksContainer' className='w-full flex flex-col gap-5 border-3 border-violet-400 rounded-lg py-8 px-8 shadow-xl bg-white'>
              <div className={taskHeader}>
                <h1>Current Tasks</h1>
              </div>
              
              <div>
                {/* <TaskList taskList={taskList} handleToggle={handleToggle} handleFilter={handleFilter} /> */}
              </div>
          </div>

          <div id='completedTasksContainer' className='w-full flex flex-col gap-5 border-3 border-violet-400 rounded-lg py-8 px-8 shadow-xl bg-white'>
            <div className={taskHeader}>
              <h1>Completed Tasks</h1>
            </div>
            
            <div id='completedTasksListContainer' className='flex flex-col gap-5 line-through text-violet-300 hover'>
              
              <div className='border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-100 shadow-md hover:bg-white ease-out duration-300 hover:decoration-0'>
                <h1>Create resume</h1>
              </div>

              <div className='border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-100 shadow-md'>
                <h1>Create linkedin profile</h1>
              </div>
              
              <div className='border-2 border-gray-200 rounded-md py-1 px-2 bg-violet-100 shadow-md'>
                <h1>Register for web seminar</h1>
              </div>
            </div>

            
            <div>
                <button type='button' className='border-2 rounded-md py-2 w-full font-semibold bg-white text-violet-500 active:bg-violet-500 active:text-violet-900 active:border-violet-500 ease-out duration-300 hover:bg-violet-700 hover:border-violet-700  hover:scale-105 border-violet-500 shadow-md hover:shadow-lg hover:text-white mt-2'>Clear Completed Tasks</button>
              </div>
            
          </div>
        
          
        </div>
      </div>     
    </div>
  )
}

export default TasksPage