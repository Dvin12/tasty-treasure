import { useEffect, useState } from "react";
import Category from "../components/Category";
import Search from "../components/Search";
import VegetarianPicks from "../components/VegetarianPicks";
import { useLoaderData } from "react-router-dom";

function Recipes() {
  const [vegetarian, setVegetarian] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setVegetarian(data.recipes);
  }, [data]);

  return (
    <section className="bg-gray-200 h-screen">
      <Search></Search>
      <Category></Category>
      <VegetarianPicks vegetarian={vegetarian}></VegetarianPicks>
    </section>
  );
}

export default Recipes;
