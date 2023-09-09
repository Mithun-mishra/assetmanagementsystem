import React from 'react'
import  { useState, useEffect } from 'react';

export default function DateAndTime() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      const timerID = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timerID);
      };
    }, []);
  
    const dateTimeStyle = {
      textAlign: 'right',
      display:"flex",
      marginLeft:"40rem",
      // Align content to the right
    };
    const paragraphStyle = {
        fontWeight: 'bold', // Make text bold
        padding: '10px', // Add padding around the paragraph
      };

  return (
    <div style={dateTimeStyle}>
      <p style={paragraphStyle}>{currentDate.toLocaleDateString()}</p>
      <p style={paragraphStyle}>{currentDate.toLocaleTimeString()}</p>
    </div>
    
  )
}
