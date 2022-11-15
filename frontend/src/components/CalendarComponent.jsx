import React from 'react'
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

const CalendarComponent = (view) => {
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
  
  return (
    <div>
        <Calendar 
              view='month'
              calendars={calendars}
              events={initialEvents}
              useFormPopup={true}
              useDetailPopup={true}
              />
    </div>
  )
}

export default CalendarComponent