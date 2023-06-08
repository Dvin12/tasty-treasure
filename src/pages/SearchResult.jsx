import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import Category from "../components/Category";
import SearchResultCard from "../components/SearchResultCard";

function SearchResult() {
  const [searchResult, setSearchResult] = useState([]);
  let params = useParams();

  const getSearchResult = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${name}`
    );
    const recipes = await data.json();
    setSearchResult(recipes.results);
  };

  useEffect(() => {
    getSearchResult(params.search);
  }, [params.search]);

  return (
    <div className="bg-gray-200">
      <Search></Search>
      <Category></Category>
      <div className="mx-60 py-20 grid grid-cols-4 justify-items-center gap-10 ">
        {searchResult.map((item) => (
          <SearchResultCard key={item.id} results={item}></SearchResultCard>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
