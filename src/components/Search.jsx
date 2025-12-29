import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FontAwesome from "./FontAwesome";
import { useSearch } from "../context/SearchContext";

function Search() {
  const { query, setQuery } = useSearch();

  return (
    <div className="border-grey-200 my-2 items-center justify-between rounded-md border-2 border-solid transition-colors duration-200 hover:border-blue-500 lg:flex">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent py-2 ps-2 text-lg outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="h-full self-end bg-gray-200 px-2 py-3 text-gray-400 hover:bg-gray-300">
        <FontAwesome icon={faMagnifyingGlass} size="lg" />
      </div>
    </div>
  );
}

export default Search;
