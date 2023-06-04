import { FiSearch } from "react-icons/fi";
function Search() {
  return (
    <div className="flex items-center justify-center py-20 ">
      <div className="relative flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for a recipe"
          className="py-4 px-8 w-[800px] rounded-3xl outline-none"
        />
        <div className="absolute  right-6 text-2xl text-gray-400 ">
          <FiSearch></FiSearch>
        </div>
      </div>
    </div>
  );
}

export default Search;
