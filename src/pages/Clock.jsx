import React, { useState, useEffect } from 'react';

function Clock({ format = 'HH:mm:ss' }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    timeStyle: 'medium',
    hour12: false,
  });

  return (
    <div>
      <h1>{formatTime(formattedTime, format)}</h1>
    </div>
  );
}

function formatTime(time, format) {
  const [hours, minutes, seconds] = time.split(':');
  const formatHours = format.includes('HH') ? padZero(hours) : hours % 12 || 12;
  const formatMinutes = format.includes('mm') ? padZero(minutes) : '';
  const formatSeconds = format.includes('ss') ? padZero(seconds) : '';
  const ampm = format.includes('a') ? (hours >= 12 ? 'PM' : 'AM') : '';
  return `${formatHours}:${formatMinutes}:${formatSeconds} ${ampm}`;
}

function padZero(num) {
  return String(num).padStart(2, '0');
}

export default Clock;
