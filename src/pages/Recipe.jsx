import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Search from "../components/Search";
import { useDispatch } from "react-redux";
import { addToSaved } from "../redux/tastySlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Recipe() {
  const [recipeDetails, setRecipeDetails] = useState([{}]);
  const [notifaction, setNotification] = useState(false);
  const dispatch = useDispatch();
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

  const handleNotification = () => {
    if (!notifaction) {
      toast.success("Recipe saved!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setNotification(true);
    }
    dispatch(
      addToSaved({
        id: recipeDetails.id,
        title: recipeDetails.title,
        image: recipeDetails.image,
      })
    );
  };

  return (
    <section className="bg-gray-200 pb-40 ">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="pt-40">
          <Search></Search>
        </div>
        <div className="xl:grid xl:grid-cols-2 xl:mx-48 xl:p-12 xl:justify-items-center xl:items-center xl:h-fit flex flex-col gap-10">
          <div className="flex flex-col items-center justify-center order-last xl:order-none">
            <img
              src={recipeDetails.image}
              alt={recipeDetails.title}
              className="rounded-2xl"
            />
            <button
              onClick={handleNotification}
              className="p-4 bg-green-600 my-8 rounded-xl font-medium text-gray-100 text-lg hover:bg-green-700 duration-300"
            >
              Save for later
            </button>

            <Link to="/recipes">
              <button>Go Back</button>
            </Link>
          </div>
          <div className="bg-gray-100 xl:p-8 p-4 xl:rounded-2xl h-fit">
            <h3 className="xl:text-3xl text-2xl text-center xl:text-left py-4">
              {recipeDetails.title}
            </h3>
            <span
              dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
              className="xl:text-md "
            ></span>
            <div className="p-8 border-t-2 border-b-2 my-10">
              <ul className="grid xl:grid-cols-3 grid-cols-2 ">
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
              className="p-4 my-4 text-justify"
              dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
            ></h4>
          </div>
        </div>
      </motion.div>
      <ToastContainer></ToastContainer>
    </section>
  );
}
export default Recipe;
