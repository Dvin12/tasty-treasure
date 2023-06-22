import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "../../components/Search";
import Category from "../../components/Category";
import CuisneCard from "./components/CuisineCard";
import { motion } from "framer-motion";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const storedRecipes = localStorage.getItem(`${name}Recipes`);
    if (storedRecipes) {
      setCuisine(JSON.parse(storedRecipes));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=c035a78b9bc840dab01f2c6dc6c3d6a5&number=16&cuisine=${name}`
      );
      const recipes = await data.json();
      localStorage.setItem(`${name}Recipes`, JSON.stringify(recipes.results));
      setCuisine(recipes.results);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  if (cuisine.length === 0) {
    return <div className="pt-12 md:pt-20 xl:pt-40">Loading...</div>;
  }

  return (
    <div className="bg-gray-200 ">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pt-12 md:pt-20 xl:pt-28">
          <Search></Search>
        </div>
        <Category></Category>
        <div className="flex w-full flex-col items-center gap-10 py-28 md:grid md:grid-cols-2 md:px-8 xl:grid-cols-4 xl:justify-items-center xl:gap-10 xl:p-10 xl:px-14 xl:py-20 xl:pb-28 2xl:px-60 ">
          {cuisine.map((item) => (
            <Link to={"/recipe/" + item.id} key={item.id}>
              <CuisneCard cuisine={item}></CuisneCard>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Cuisine;
