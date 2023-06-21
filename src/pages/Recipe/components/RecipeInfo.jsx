function RecipeInfo({ recipeDetails }) {
  return (
    <div className="h-fit bg-gray-100 p-4 md:p-6 xl:rounded-2xl xl:p-8">
      <h3 className="py-4 text-center text-2xl xl:text-left xl:text-3xl">
        {recipeDetails.title}
      </h3>
      <span
        dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
        className="xl:text-md "
      ></span>
      <div className="my-10 border-b-2 border-t-2 p-4">
        <ul className="grid grid-cols-2 md:justify-items-center xl:grid-cols-3 xl:justify-items-start ">
          {recipeDetails.extendedIngredients
            ? recipeDetails.extendedIngredients.map((ingredient) => (
                <li className="mx-3 my-4 list-disc" key={ingredient.id}>
                  {ingredient.nameClean}
                </li>
              ))
            : ""}
        </ul>
      </div>
      <h3 className="text-center text-xl">Instructions</h3>
      <h4
        className="my-4 text-justify xl:p-5"
        dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
      ></h4>
    </div>
  );
}

export default RecipeInfo;
