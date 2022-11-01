import React from 'react';
import { Navbar, Sidebar, ToastCalendar } from '../components';

const CalendarPage = () => {
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
        <ToastCalendar />
        
      </div>
    </div>
  )
}

export default CalendarPage