import React from 'react';
import { Navbar, Sidebar } from '../components';
import { Calendar } from '../components/calendar';

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
      <Calendar />
        
      </div>
    </div>
  )
}

export default CalendarPage