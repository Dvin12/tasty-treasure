import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };
  return (
    <div className="flex items-center justify-center py-20 ">
      <form
        className="relative flex items-center justify-center"
        onSubmit={handleForm}
      >
        <input
          type="text"
          placeholder="Search for a recipe"
          className="w-80 rounded-3xl px-8 py-4 outline-none md:w-[600px] xl:w-[800px]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="absolute  right-6 text-2xl text-gray-400 ">
          <FiSearch className="cursor-pointer duration-300 hover:text-gray-900"></FiSearch>
        </div>
      </form>
    </div>
  );
}

export default Search;
