import React from 'react';

const NotificationGrid = ({ communications }) => {
  // Logging to check the communications data
  console.log("Communications data:", communications);

  const overdue = communications.filter(comm => new Date(comm.date) < new Date());
  const dueToday = communications.filter(comm => new Date(comm.date).toDateString() === new Date().toDateString());

  // Logging to check the filtered arrays
  console.log("Overdue communications:", overdue);
  console.log("Due today communications:", dueToday);

  return (
    <div>
      <div className="notification-grid" style={{ border: '1px solid black', padding: '10px' }}>
        <h2>Overdue Communications</h2>
        {overdue.length ? (
          <ul>
            {overdue.map((comm, idx) => (
              <li key={idx}>{comm.type} - {new Date(comm.date).toLocaleDateString()}</li>
            ))}
          </ul>
        ) : (
          <div>No overdue communications</div>
        )}
      </div>

      <div className="notification-grid" style={{ border: '1px solid black', padding: '10px' }}>
        <h2>Today’s Communications</h2>
        {dueToday.length ? (
          <ul>
            {dueToday.map((comm, idx) => (
              <li key={idx}>{comm.type} - {new Date(comm.date).toLocaleDateString()}</li>
            ))}
          </ul>
        ) : (
          <div>No communications due today</div>
        )}
      </div>
    </div>
  );
};

export default NotificationGrid;
