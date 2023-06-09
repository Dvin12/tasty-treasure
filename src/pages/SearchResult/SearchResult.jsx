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
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=c035a78b9bc840dab01f2c6dc6c3d6a5&query=${name}`
    );
    const recipes = await data.json();
    setSearchResult(recipes.results);
  };

  useEffect(() => {
    getSearchResult(params.search);
  }, [params.search]);

  return (
    <div className="bg-gray-200">
      <div className="md:pt-20">
        <Search></Search>
      </div>
      <Category></Category>
      <div className="justify-items-center gap-10 py-20 md:grid md:grid-cols-2 xl:mx-14 xl:grid-cols-4 2xl:mx-60 ">
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
