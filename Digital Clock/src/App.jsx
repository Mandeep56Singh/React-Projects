import { useState ,useEffect} from 'react'

function App() {
  const [time,setTime] = useState(new Date());
   useEffect( 
    () => {
      const intervalId = setInterval(
        () => {
              setTime(new Date());
        },1000);

      return () => {
        clearInterval(intervalId);
      }
       
    },[]);

 function FormatTime() {
   let hours = time.getHours();
   let minutes = time.getMinutes(); // Corrected method call
   let seconds = time.getSeconds(); // Corrected method call
   const meridian = hours < 12 ? "AM" : "PM";
   hours = hours < 10 ? `0${hours}` : hours; 
   minutes = minutes < 10 ? `0${minutes}` : minutes;
   seconds = seconds < 10 ? `0${seconds}` : seconds; 
   hours = hours % 12 || 12;

   const clock = `${hours}:${minutes}:${seconds} ${meridian}`;
   return <p className="text-4xl text-center">{clock}</p>;
 }

  return (
     <div className='flex justify-center items-center '>
        <FormatTime></FormatTime>
     </div>
  )
}

export default App
