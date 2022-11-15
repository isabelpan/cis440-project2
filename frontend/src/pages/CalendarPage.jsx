import React from 'react';
import { Navbar, Sidebar } from '../components';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

const CalendarPage = () => {
  var date = new Date();
  const dateOptions = { month: 'long' };

  const calendars = [
    {
      id: '0',
      name: 'Private',
      backgroundColor: '#9e5fff',
      borderColor: '#9e5fff',
    },
    {
      id: '1',
      name: 'Company',
      backgroundColor: '#0044ff',
      borderColor: '#1e00ff',
    },
  ];

  const initialEvents = [
    {
      id: '0',
      calendarId: '1',
      title: 'Zoom with Mentor',
      category: 'time',
      start: '2022-11-28T12:00:00',
      end: '2022-11-28T13:30:00',
    },
    {
      id: '1',
      calendarId: '0',
      title: 'Career Fair',
      category: 'time',
      start: '2022-11-11T13:00:00',
      end: '2022-11-11T15:30:00',
    },
    {
      id: '2',
      calendarId: '0',
      title: 'Job Interview',
      category: 'time',
      start: '2022-11-14T10:00:00',
      end: '2022-11-14T10:30:00',
    }
  ];

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
          <div className='text-violet-600 font-bold text-4xl border-b-2 pb-2'>
            <h1>{thisMonth}</h1>
          </div>

          <div className='mt-5'>
            <Calendar 
              view='month'
              calendars={calendars}
              events={initialEvents}
              />
          </div>

        </div>      
      </div>
    </div>
  )
}

export default CalendarPage