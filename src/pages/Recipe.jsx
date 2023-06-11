import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Search from "../components/Search";

function Recipe() {
  const [recipeDetails, setRecipeDetails] = useState([{}]);
  let params = useParams();
  const getRecipeDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const details = await data.json();
    setRecipeDetails(details);
  };

  useEffect(() => {
    getRecipeDetails();
  }, [params.name]);

  console.log(recipeDetails);

  return (
    <section className="bg-gray-200 pb-40 ">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Search></Search>
        <div className="grid grid-cols-2 mx-48 p-12 justify-items-center items-center h-fit">
          <div className="flex flex-col items-center justify-center">
            <img
              src={recipeDetails.image}
              alt={recipeDetails.title}
              className="rounded-2xl"
            />
            <button className="p-4 bg-green-500 my-8 rounded-xl font-medium text-gray-100 text-lg hover:bg-green-600 duration-300">
              Add to Favourites
            </button>
            <Link to="/recipes">
              <button>Go Back</button>
            </Link>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl h-fit">
            <h3 className="text-3xl py-4">{recipeDetails.title}</h3>
            <span
              className="text-md"
              dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
            ></span>
            <div className="p-8 border-t-2 border-b-2 my-10">
              <ul className="grid grid-cols-3">
                {recipeDetails.extendedIngredients
                  ? recipeDetails.extendedIngredients.map((ingredient) => (
                      <li className="my-2 list-disc" key={ingredient.id}>
                        {ingredient.nameClean}
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <h3 className="text-xl text-center">Instructions</h3>
            <h4
              className="p-4 my-4"
              dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
            ></h4>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default Recipe;
