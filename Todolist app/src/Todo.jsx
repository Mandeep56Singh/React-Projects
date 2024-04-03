/* eslint-disable react/prop-types */
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Todo(props) {
  return (
    <div>
      <div className=" w-full border-red-200 border-2 rounded-xl lg:pt-10 pt-4 px-6 flex flex-col gap-2 h-[120px] my-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label className="  poppins-medium text-xl text-red-400 ">{props.name}</label>
            <p className="-mt-2  poppins-light text-sm text-gray-600">
              {props.message}
            </p>
            <div className="border-[0.5px] border-red-100  "></div>
          </div>
          <input type="checkbox" defaultChecked = {props.completed} id = {props.id} className="size-8 checked:bg-red-400 border-2 border-red-200 rounded-full appearance-none checked:border-0 after:relative after:top-1/2" />
        </div>
        <div className="text-xs flex justify-between">
          <div className="flex gap-1">
            Today :<p className=" text-xs text-gray-400">{props.startTime} - </p>
            <p className="text-xs text-gray-400">{props.endTime}</p>
          </div>

          <div className="">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="text-xl sm:text-2xl text-red-400 mr-2"
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="text-xl sm:text-2xl text-red-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
