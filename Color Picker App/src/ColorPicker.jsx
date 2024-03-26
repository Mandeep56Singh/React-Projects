import { useState } from "react";

const  ColorPicker = () => {

   const [color, setColor] = useState("#000000");

   const handleChange = e => {
     setColor(e.target.value);
   }

   return (
     <div className="bg-green-100  w-full pt-4 flex flex-col items-center">
       <h1 className="text-4xl text-center text-green-600 font-bold">
         Pick Your Favorite Color
       </h1>
       <label className="w-full flex justify-center">
         <input
           type="color"
           className="mt-10 w-9/12 h-[100px]  "
           value={color}
           onChange={handleChange}
         />
       </label>

       <h1 className="text-2xl text-center mt-10 text-green-500 font-bold ">Your Selected Color is <i style={ {color:color}}>{color }</i></h1>
       <div className=" p-10 mt-10 size-1/2 rounded-full" style={ {backgroundColor:color}}>
         <img
           src="https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_1280.png"
           alt=""
         />
       </div>
     
     </div>
   );
}
export default ColorPicker;