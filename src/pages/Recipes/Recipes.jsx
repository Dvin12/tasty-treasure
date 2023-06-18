import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import Category from "../../components/Category";
import Search from "../../components/Search";
import VegetarianPicks from "./components/VegetarianPicks";
import Discover from "./components/Discover";

function Recipes() {
  const [vegetarian, setVegetarian] = useState([]);
  const [discover, setDiscover] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setVegetarian(data.vegetarian.recipes);
    setDiscover(data.discover.recipes);
  }, [data]);

  return (
    <section className="bg-gray-200 ">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="pt-24">
          <Search></Search>
        </div>
        <Category></Category>
        <VegetarianPicks vegetarian={vegetarian}></VegetarianPicks>
        <Discover discover={discover}></Discover>
      </motion.div>
    </section>
  );
}

export default Recipes;
