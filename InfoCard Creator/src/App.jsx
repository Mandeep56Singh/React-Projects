/* eslint-disable react/prop-types */
import { useState } from "react";

function App(props) {
  const [person, setPerson] = useState([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState({
    number: null,
    email: "",
  });
  const [pic, setPic] = useState("");

  const [address, setAddress] = useState("");


  const handleChangeName = (e) => {
    setName(e.target.value);
  };
const handleChangeNumber = (e) => {
  const val = e.target.value;
  if (!isNaN(val)) {
    setContact((c) => ({ ...c, number: val }));
  }
};
const handleChangeEmail = (e) => {
  const val = e.target.value;
    setContact((c) => ({ ...c, email: val }));
};
const handleCreate = () => {
  const newPerson = {
    Name: name,
    Contact: { Number: contact.number, Email: contact.email },
    Address: address,
  };
  setPerson((p) => [...p, newPerson]);
  // This will pass data to parent element 
  props.setInfo((p) => [...p,newPerson]);
    props.setClose(true);
    props.setClicked(false);

};
  return (
   
      <div className="w-[280px] mx-auto p-4 bg-black  border-4 border-pink-700  rounded-2xl mt-4 absolute top-4 z-10">
        <div className="flex">
          <h1 className="text-center text-2xl text-white font-bold w-3/4 mx-auto">
            Enter Details
          </h1>
          <button className="text-4xl text-white -mt-2"
          onClick={ () =>{props.setClose(true); props.setClicked(false)} } >×</button>
        </div>

        <div className="w-[240px] flex justify-center mt-8  relative">
          <img
            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1711606007~exp=1711606607~hmac=7f43f47c7411339ac65048d3c9f534c51bce21e6923003fa29d940274e117c09"
            alt="image"
            className="rounded-full  size-36 "
          />

          <div className="bg-pink-800 size-12 rounded-full absolute right-12 flex flex-col">
            <button className="text-white text-4xl font-bold">+</button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full mt-6 items-center ">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent  border-2 rounded-lg border-white  placeholder:text-lg placeholder:font-semibold focus:border-pink-500 focus:outline-none  text-white w-[180px] p-1 pl-4 "
            value={name}
            onChange={handleChangeName}
          />

          <input
            type="text"
            placeholder="Number"
            className="bg-transparent  border-2 rounded-lg border-white  placeholder:text-lg placeholder:font-semibold focus:border-pink-500 focus:outline-none  text-white w-[180px] p-1 pl-4 "
            value={contact.number}
            onChange={handleChangeNumber}
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-transparent  border-2 rounded-lg border-white  placeholder:text-lg placeholder:font-semibold focus:border-pink-500 focus:outline-none  text-white w-[180px] p-1 pl-4 "
            value={contact.email}
            onChange={handleChangeEmail}
          />
        </div>
        <button className="block text-xl text-white bg-pink-800 p-2 rounded-2xl mt-8 mx-auto w-32" onClick={handleCreate}>
          Create
        </button>
      </div>
  
  );
}

export default App;
