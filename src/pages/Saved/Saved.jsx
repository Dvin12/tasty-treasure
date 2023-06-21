import { useDispatch, useSelector } from "react-redux";
import SavedItem from "./components/SavedItem";

import { resetSaved } from "../../redux/tastySlice";

function Saved() {
  const savedData = useSelector((state) => state.tasty.recipeDetails);
  const dispatch = useDispatch();
  return (
    <section className="h-screen bg-gray-200">
      <div className="py-32 xl:mx-14 xl:py-44 2xl:mx-60 2xl:py-60">
        <div className=" flex flex-col items-center gap-6 xl:flex-row xl:justify-between">
          <h3 className=" text-2xl font-medium xl:text-4xl">Saved Recipes</h3>
          <span
            onClick={() => dispatch(resetSaved())}
            className="cursor-pointer text-lg font-semibold text-green-600 xl:text-xl"
          >
            Remove All
          </span>
        </div>
        <div className="mx-6 my-12 flex flex-col items-center justify-items-center gap-10 xl:mx-10 xl:grid xl:grid-cols-3 xl:gap-24 2xl:my-40">
          {savedData.map((item) => (
            <SavedItem item={item} key={item.id}></SavedItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Saved;
