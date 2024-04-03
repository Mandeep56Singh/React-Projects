import { useState } from 'react'
import { data } from './data'
import { LazyLoadImage } from "react-lazy-load-image-component";


function App() {
  const [index,setIndex] = useState(0);
  const [showMore,setShowMore] = useState(false);
  const [position,setPosition] = useState({
    x:0,
    y:0
  })
  const [hover,setHover] = useState(false);
  const hasNext = index < data.length - 1;
  const hasPrev = index > 0;

  function handleNext () {
    hasNext && (setIndex(i => i + 1));
  }
  function handlePrev () {
    hasPrev && (setIndex(i => i - 1));
  }
  function showDetails () {
    setShowMore(!showMore);
  }
  const dataItem = data[index];
   const GetDetails = () => <p className='bg-gradient-to-b from-blue-600 to-purple-500 text-xl rounded-xl p-2 font-semibold w-[300px]'>{dataItem.title}</p>
  return (
    <div
      className="relative pt-4 px-5  flex flex-col justify-center items-center gap-4"
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <div
        className="absolute  w-5 h-5 bg-purple-600 rounded-full "
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          left:-10,
          top:-10,
          pointerEvents:'none'
        }}
      ></div>
      <div className="flex justify-center items-center gap-2">
        <button onClick={handlePrev}>
          <i className="fa-solid fa-circle-chevron-left text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 "></i>
        </button>
        <div className="bg-white rounded-lg w-9/12 h-[300px] mx-4 sm:w-[400px] flex justify-center items-center">
          <LazyLoadImage
            src={dataItem.image}
            alt="image"
            className="rounded-xl object-contain w-[300px] h-[300px]"
          />
        </div>
        <button onClick={handleNext} disabled={!hasNext}>
          <i className="fa-solid fa-circle-chevron-right text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600 disabled:opacity-50"></i>
        </button>
      </div>
      <p className="text-white text-xl">
        {index + 1}/{data.length}{" "}
      </p>
      <h1 className="text-white font-bold text-4xl">${dataItem.price}</h1>
      <button
        className="text-center font-bold rounded-2xl p-2  text-xl "
        onClick={showDetails}
       onMouseEnter={() =>  setHover(true)
       }
       style={ {
        backgroundColor:hover? 'lightblue':'purple'
       }} >
        {!showMore ? "Show" : "Hide"} Details
      </button>
      {showMore && <GetDetails></GetDetails>}
    </div>
  );
}

export default App
