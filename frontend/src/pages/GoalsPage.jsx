import React from 'react';
import { Navbar, Sidebar } from '../components';

const GoalsPage = () => {
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

      <div lassName='w-10/12 float-right bg-gray-50 h-full py-14 pl-10'>
        
      </div>
    </div>
  )
}

export default GoalsPage