import React, {useState, useEffect} from 'react'

function  DigitalClock(){
 const [time,setTime] = useState(new Date());
 useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date());
    }, 1000); // Update every second

    return () => {
        clearInterval(intervalId);
    };
}, []);

 function formatTime(){
  let hours= time.getHours();
  let minutes= time.getMinutes();
  let seconds= time.getSeconds();
   let milliseconds = time.getMilliseconds();
  const meridiem= hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
   hours = hours < 10 ? String(hours).padStart(2,"0") : hours;
   minutes = minutes < 10 ? String(minutes).padStart(2,"0") : minutes;
   seconds = seconds < 10 ? String(seconds).padStart(2,"0") : seconds;
   milliseconds = milliseconds < 10 ? String(milliseconds).padStart(2,"0") : milliseconds;
  return `${hours}:${minutes}:${seconds}:${milliseconds}  ${meridiem} `;
 }
    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default DigitalClock;