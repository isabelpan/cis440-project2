import React from 'react';
import { Navbar, Sidebar } from '../components';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

const CalendarPage = () => {
  var date = new Date();
  const dateOptions = { month: 'long' };

  var thisMonth = date.toLocaleDateString("en-US", dateOptions)

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
        <div>
          <div className='text-violet-600 font-bold text-4xl'>
            <h1>{thisMonth}</h1>
          </div>

          <div>
            <Calendar 
              view='month'/>
          </div>

        </div>      
      </div>
    </div>
  )
}

export default CalendarPage