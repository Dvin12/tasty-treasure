import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "../../components/Search";
import Category from "../../components/Category";
import SearchResultCard from "./components/SearchResultCard";

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
      <div className="mx-60 grid grid-cols-4 justify-items-center gap-10 py-20 ">
        {searchResult.map((item) => (
          <Link to={"/recipe/" + item.id}>
            <SearchResultCard key={item.id} results={item}></SearchResultCard>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
