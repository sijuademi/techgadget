import FontAwesome from "./FontAwesome";

function Search() {
  return (
    <div className="border-grey-200 my-2 items-center justify-between rounded-md border-2 border-solid lg:flex">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent py-2 ps-2 text-lg outline-none"
      />
      <div className="h-full self-end bg-gray-200 px-2 py-3">
        <FontAwesome type="solid" size="lg">
          magnifying-glass
        </FontAwesome>
      </div>
    </div>
  );
}

export default Search;
