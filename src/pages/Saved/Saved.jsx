import { useDispatch, useSelector } from "react-redux";
import SavedItem from "./components/SavedItem";

import { resetSaved } from "../../redux/tastySlice";

function Saved() {
  const savedData = useSelector((state) => state.tasty.recipeDetails);
  const dispatch = useDispatch();
  return (
    <section className="h-fit bg-gray-200">
      <div className="mx-60 py-60">
        <div className=" flex items-center justify-between">
          <h3 className=" text-4xl font-medium">Saved Recipes</h3>
          <span
            onClick={() => dispatch(resetSaved())}
            className="cursor-pointer text-xl font-semibold text-green-600"
          >
            Remove All
          </span>
        </div>
        <div className="my-40 grid grid-cols-3 items-center justify-items-center gap-24">
          {savedData.map((item) => (
            <SavedItem item={item} key={item.id}></SavedItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Saved;
