import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Search from "../components/Search";
import Category from "../components/Category";
import CuisneCard from "../components/CuisineCard";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const storedRecipes = localStorage.getItem(`${name}Recipes`);
    if (storedRecipes) {
      setCuisine(JSON.parse(storedRecipes));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=16&cuisine=${name}`
      );
      const recipes = await data.json();
      localStorage.setItem(`${name}Recipes`, JSON.stringify(recipes.results));
      setCuisine(recipes);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="bg-gray-200 ">
      <div>
        <Search></Search>
        <Category></Category>
        <div className="mx-60 py-20 grid grid-cols-4 justify-items-center gap-10 ">
          {cuisine.map((item) => (
            <CuisneCard key={item.id} cuisine={item}></CuisneCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cuisine;
