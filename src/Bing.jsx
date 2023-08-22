import TopNav from "./TopNav.jsx";
import SearchBox from "./SearchBox.jsx";

export default function Bing() {
  return (
    <div className={"min-h-[100vh] bg-gray-600"}>
      <TopNav />
      <SearchBox />
    </div>
  );
}
