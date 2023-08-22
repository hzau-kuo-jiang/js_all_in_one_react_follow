import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

function SearchBox() {
  return (
    <div className={"container mx-auto"}>
      <div className={"relative ml-auto w-2/3 bg-transparent bg-white "}>
        <input type="text" className={"block w-full rounded-full py-2 pl-4 "} />
        <div
          className={"absolute right-3 top-1/2 -translate-y-1/2 text-sky-400"}
        >
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={"ml-2"} />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
