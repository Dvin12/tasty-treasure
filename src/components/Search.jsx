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
          className="py-4 px-8 w-[800px] rounded-3xl outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="absolute  right-6 text-2xl text-gray-400 ">
          <FiSearch className="cursor-pointer hover:text-gray-900 duration-300"></FiSearch>
        </div>
      </form>
    </div>
  );
}

export default Search;
