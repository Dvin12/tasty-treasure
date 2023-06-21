import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Search from "../../components/Search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecipeFunctionality from "./components/RecipeSave";
import RecipeInfo from "./components/RecipeInfo";

function Recipe() {
  const [recipeDetails, setRecipeDetails] = useState([{}]);

  let params = useParams();
  const getRecipeDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=c035a78b9bc840dab01f2c6dc6c3d6a5`
    );
    const details = await data.json();
    setRecipeDetails(details);
  };

  useEffect(() => {
    getRecipeDetails();
  }, [params.name]);

  return (
    <section className="bg-gray-200 pb-40 ">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="pt-12 md:pt-20 ">
          <Search></Search>
        </div>
        <div className="flex flex-col gap-10 xl:mx-14 xl:grid xl:h-fit xl:grid-cols-2 xl:items-center xl:justify-items-center 2xl:mx-48 2xl:p-12">
          <RecipeFunctionality
            recipeDetails={recipeDetails}
          ></RecipeFunctionality>
          <RecipeInfo recipeDetails={recipeDetails}></RecipeInfo>
        </div>
      </motion.div>
      <ToastContainer></ToastContainer>
    </section>
  );
}
export default Recipe;
