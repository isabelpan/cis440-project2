import React from 'react';
import { Navbar, Sidebar } from '../components';
// import { Calendar } from '../components/calendar';
import { googleCalendarSync } from '../components/calendar';
import {Eventcalendar } from '@mobiscroll-react';

const CalendarPage = () => {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    googleCalendarSync.init({
      apiKey: 'APIKEY',
      onInit: () => {
        googleCalendarSync.getEvents(
          'PUBLIC_CALENDAR',
          new Date(2022,1,1),
          new Date(2022, 3, 0),
        ).then((events) => {
          setEvents(events);
        });
      },
    });
  }, []);

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
      <Eventcalendar data = {myEvents}></Eventcalendar>
        
      </div>
    </div>
  )
}

export default CalendarPage