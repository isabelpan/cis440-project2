import React from 'react';
import { Navbar, Sidebar, CalendarComponent } from '../components';
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
        <div className='pr-10'>
          <div className='text-violet-600 font-bold text-4xl border-b-2 pb-4'>
            <h1>{thisMonth}</h1>
          </div>

          <div className='mt-5'>
            <CalendarComponent />
          </div>

        </div>      
      </div>
    </div>
  )
}

export default CalendarPage