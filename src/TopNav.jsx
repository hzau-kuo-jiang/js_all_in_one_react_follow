import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faEllipsis,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function TopNav() {
  return (
    <header>
      <div
        className={
          "container mx-auto flex items-center p-2 text-sm text-gray-100 "
        }
      >
        <a href={"#"} className={"flex items-center text-xl"}>
          <FontAwesomeIcon
            icon={faMicrosoft}
            className={"mr-1 text-3xl text-blue-600"}
          />
          Microsoft Bing
        </a>
        <a className={"ml-12 text-gray-300"} href="#">
          Images
        </a>
        <a className={"ml-8"}>
          <FontAwesomeIcon
            icon={faEllipsis}
            className={"text-xl text-gray-300"}
          />
        </a>
        <a href={"#"} className={"ml-auto flex items-center"}>
          kuo
          <FontAwesomeIcon
            icon={faUser}
            className={
              "ml-2 h-3 w-3 rounded-full bg-gray-50 p-2 leading-none text-gray-500"
            }
          />
        </a>
        <a href={"#"} className={"ml-4 flex items-center"}>
          Rewards
          <FontAwesomeIcon
            icon={faTrophy}
            className={
              " ml-2 h-4 w-4 rounded-full border-2 border-gray-300  p-1 leading-none "
            }
          />
        </a>
        <a href={"#"} className={"ml-4"}>
          <FontAwesomeIcon icon={faBars} size={"lg"} />
        </a>
      </div>
    </header>
  );
}
