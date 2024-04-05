/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import "./index.css";
function App() {
  const [length, setLength] = useState(6);
  const [characterSet,setCharacterSet] = useState("");
  const [password, setPassword] = useState(""); 


  const generatePassword = useCallback (() => {
   let pass= ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   if(characterSet === "digits") {
       str += "0123456789";
   }
   if(characterSet === "symbols") {
    str += "!@#$%^&*()_+"
   }
   for(let i = 1; i < length ; i++) {
    const char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char);
   }

   setPassword(pass);
  },[length,characterSet])
  return (
    <div className="bg-black w-9/12 py-8 px-12 border-2 border-cyan-400 mx-auto my-20 ">
      <h1 className=" text-4xl text-yellow-400 font-extrabold tracking-wider leading-tight uppercase">
        PassWord <br /> Generator{" "}
      </h1>

      <div className="flex flex-col items-start gap-4 mt-8  ">
        <div className="relative text-cyan-400 w-9/12">
          <input
            type="text"
            className="border-2 border-cyan-400 bg-transparent focus:outline-none p-2  bg-cyan-400 bg-opacity-20 w-full placeholder:text-cyan-300"
            value={password}
            placeholder="Password"
            readOnly
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <i className="fa-solid fa-arrows-rotate cursor-pointer text-xl  "></i>
          </span>
        </div>
        <button className="uppercase bg-yellow-400  py-2 px-4 font-bold tracking-wide border-r-4 border-transparent border-r-red-500">
          Copy password_ <i className="fa-solid fa-arrow-right ml-4"></i>
        </button>
      </div>

      <input
        type="range"
        min={6}
        max={100}
        value={length}
        className="h-6 appearance-none mt-8 w-3/4 bg-transparent"
        onChange={(e) => setLength(e.target.value)}
      />
      <br />
      <label htmlFor="length" className="text-cyan-400 capitilize">
        {" "}
        Length: {length}
      </label>

      <div className="flex text-white tracking-wide mt-8 items-center">
       
        <input
          type="checkbox"
          className="border-2 border-yellow-400 bg-transparent appearance-none size-5 checked:bg-yellow-400 flex-shrink-0 "
         
          onChange={() => setCharacterSet((c) => "Digits")}
        />
        <label
          htmlFor="uppercase "
          className="mr-4 ml-1 font-thin tracking-wider"
        >
          Digits
        </label>
        <input
          type="checkbox"
          className="border-2 border-yellow-400 bg-transparent appearance-none size-5 checked:bg-yellow-400 flex-shrink-0 "
     
          onChange={() => setCharacterSet((c) => "Symbols")}
        />
        <label
          htmlFor="uppercase "
          className="mr-4 ml-1 font-thin tracking-wider"
        >
          Symbols
        </label>
      </div>
    </div>
  );
}

export default App;
