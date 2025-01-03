import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const ScheduleCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Team Meeting',
      start: new Date(2025, 0, 5, 10, 0), // Jan 5, 2025, 10:00 AM
      end: new Date(2025, 0, 5, 11, 0),   // Jan 5, 2025, 11:00 AM
    },
    {
      title: 'Client Call',
      start: new Date(2025, 0, 6, 14, 0), // Jan 6, 2025, 2:00 PM
      end: new Date(2025, 0, 6, 15, 0),   // Jan 6, 2025, 3:00 PM
    },
  ]);

  // Add a new event
  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter Event Title');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div style={{ height: '50vh', margin: '50px' }}>
      <h2>Schedule Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1000 }}
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={(event) => alert(event.title)}
      />
    </div>
  );
};

export default ScheduleCalendar;
