import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FontAwesome from "./FontAwesome";

function Search() {
  return (
    <div className="border-grey-200 hover my-2 items-center justify-between rounded-md border-2 border-solid lg:flex">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent py-2 ps-2 text-lg outline-none"
      />
      <div className="h-full self-end bg-gray-200 px-2 py-3 text-gray-400">
        <FontAwesome icon={faMagnifyingGlass} size="lg" />
      </div>
    </div>
  );
}

export default Search;
