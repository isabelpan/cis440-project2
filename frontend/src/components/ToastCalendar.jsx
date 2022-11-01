import React, { useEffect, useState } from 'react';
import { EventCalendar, DatePicker, getJson, toast } from '@mobiscroll/react-lite';

const ToastCalendar = () => {
  // const [myEvents, setEvents] = useState([]);

  //   useEffect(() => {
  //       getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
  //           setEvents(events);
  //       }, 'jsonp');
  //   }, []);
    
  //   const onEventClick = React.useCallback((event) => {
  //       toast({
  //           message: event.event.title
  //       });
  //   }, []);
    
  //   const view = React.useMemo(() => {
  //       return {
  //           calendar: { type: 'month' },
  //           agenda: { type: 'month' }
  //       };
  //   }, []);


  return (
    <div>
      {/* <EventCalendar
       theme="ios" 
       themeVariant="light"
       clickToCreate={false}
       dragToCreate={false}
       dragToMove={false}
       dragToResize={false}
       eventDelete={false}
       data={myEvents}
       view={view}
       onEventClick={onEventClick} /> */}
        
    </div>
  )
}

export default ToastCalendar