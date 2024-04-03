import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
    return (
      <div className="flex  justify-between w-full gap-2  ">
        <label htmlFor="input" className="w-11/12">
          <input
            type="text"
            className="bg-red-100  rounded-md pl-4 placeholder:text-red-400 text-red-400 poppins-light focus:outline-red-300 w-full h-10 sm:h-14 md:h-16 lg:text-xl  "
            placeholder="search for task..."
          />
        </label>
        <div className="bg-red-300 size-10 rounded-md flex justify-center items-center  sm:size-14 md:size-16">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-white size-4 sm:size-6"
          ></FontAwesomeIcon>
        </div>
      </div>
    );
}
export default SearchBar;