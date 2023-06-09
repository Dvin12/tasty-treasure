import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [recipeDetails, setRecipeDetails] = useState({});
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

  return <div>You are viewing: {recipeDetails.title}</div>;
}

export default Recipe;
