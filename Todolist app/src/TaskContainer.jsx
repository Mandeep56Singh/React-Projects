import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Todo from "./Todo";
import { useState } from "react";
// const [name, setName] = useState("");
// const [msg, setMsg] = useState("");
// const [strTime, setStrTime] = useState("");
// const [endTime, setEndTime] = useState("");

const DATA = [
  {
    // id: 0,
    // name: "go to market",
    // msg: "buy the shampoo",
    // startTime: "10:00AM",
    // endTime: "11:00AM",
  },
 
];


function TaskEditor({isOpen}) {
  if(isOpen ) {
  return(
    <form className="w-9/12 max-w-[400px] border-red-400 border-2 h-[320px] rounded-2xl flex flex-col py-5 px-10 gap-2">
      <h1 className="text-center text-red-400 font-bold text-2xl">Add Your Task</h1>
      <input type="text" className="border-2 border-red-300 rounded-lg p-2 focus:outline-red-400 mt-2" id="addTask" placeholder="Enter task" />
      <textarea name="description" id="description" cols="30" rows="4" className="border-2 border-red-300 rounded-xl  p-2 focus:outline-red-400" placeholder="Enter Description"></textarea>

      

      
    </form>
    
  )
  }
}

function TaskList() {

  return (
    <div>
      {DATA.map((task) => (
        <Todo
          key={task.id}
          id={task.id}
          name={task.name}
          msg={task.msg}
          startTime={task.startTime}
          endTime={task.endTime}
        />
      ))}
    </div>
  );
}

function TaskContainer() {
const [isOpen, setIsOpen] = useState(false);
  function handleSubmit() {
  setIsOpen(i => true);
  }
  return (
    <div className="flex flex-col gap-2">
      <TaskEditor isOpen={isOpen,}></TaskEditor>
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-lg poppins-regular">Today Tasks</h1>
          <p className="poppins-light text-sm text-gray-600">Friday, 24 Feb</p>
        </div>

        <div className="ml-auto size-10 rounded-full bg-red-200 flex justify-center items-center">
          <button type="button" onClick={handleSubmit}>
            <FontAwesomeIcon
              icon={faPlus}
              className="text-white size-6 sm:size-8"
            />
          </button>
        </div>
      </div>
      <TaskList />
    </div>
  );
}

export default TaskContainer;
