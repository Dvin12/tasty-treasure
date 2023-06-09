import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <section className="bg-gray-200">
      <div className="grid grid-cols-2 mx-48 p-12">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl py-4">{recipeDetails.title}</h3>
          <img src={recipeDetails.image} alt="" />
        </div>
        <div>
          <ul className="grid grid-cols-2"></ul>
          {recipeDetails.extendedIngredients ? (
            recipeDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.nameClean}</li>
            ))
          ) : (
            <li>Loading ingredients...</li>
          )}
          <h4>{recipeDetails.instructions}</h4>
        </div>
      </div>
    </section>
  );
}
export default Recipe;
