import { useState } from "react";
import App from "./App.jsx";

function CardCreator() {
  const [clicked, setClicked] = useState(false);
  const [close, setClose] = useState(false);
  const [info, setInfo] = useState([]);

  const handleOpen = () => {
    setClicked((c) => true);
  };

 const Card = () => {
   return info.map((p, index) => (
     <div
       className="w-[320px] h-[180px] rounded-xl overflow-hidden flex mt-8"
       style={{
         backgroundColor: "#06191D",
       }}
       key={index}
     >
       <div className=" w-1/4 h-full ">
         <div className="size-[100px] bg-white  rounded-full mt-8 ml-4"></div>
       </div>
       <div className=" w-3/4 pl-16 pt-8 flex flex-col gap-2">
         <h1 className="text-xl text-white"> {p.Name} </h1>
         <h1 className="text-lg text-white"> {p.Contact.Number} </h1>
         <p className=" text-white"> {p.Contact.Email} </p>
       </div>
     </div>
   ));
 };

  return (
    <div className="flex flex-col items-center relative">
      <Card></Card>
      <button
        className="text-white bg-gradient-to-r from-pink-600 to-pink-400 text-2xl font-bold p-2 rounded-2xl mt-4 "
        onClick={handleOpen}
      >
        Create Card
      </button>
      {/* <div className="transition-all ease-in-out duration-500"> */}

      {/* {clicked && <App></App>} */}
      {/* </div> */}
      {clicked && (
        <App
          setClose={setClose}
          setClicked={setClicked}
         
          setInfo = {setInfo}
        />
      )}
    </div>
  );
}
export default CardCreator;
