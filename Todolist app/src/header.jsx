import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
     const image =
       "https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_1280.jpg";
    return (
      <div className="mt-10  flex ">
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-3 items-center">
            <div>
              <img
                src={image}
                alt="image"
                className="size-[36px] rounded-full object-cover sm:size-12"
              />
            </div>
            <div>
              <h1 className="poppins-medium text-lg sm:text-2xl">
                Jason smith
              </h1>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} className="text-xl sm:text-2xl" />
          </div>
        </div>
      </div>
    );
}
export default Header;