import React from 'react';
import { Navbar, Sidebar } from '../components';

const TasksPage = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>

        <div className ='w-15 fixed sidebar bg-white'>
          <Sidebar />
        </div>
      
      </div>

      <div className='ml-72 pt-36'>
        <h1>Your Tasks</h1>
        
      </div>
    </div>
  )
}

export default TasksPage