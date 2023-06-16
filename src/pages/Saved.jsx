import { useDispatch, useSelector } from "react-redux";
import SavedItem from "../components/SavedItem";

import { resetSaved } from "../redux/tastySlice";

function Saved() {
  const savedData = useSelector((state) => state.tasty.recipeDetails);
  const dispatch = useDispatch();
  return (
    <section className="h-fit bg-gray-200">
      <div className="py-60 mx-60">
        <div className=" flex items-center justify-between">
          <h3 className=" font-medium text-4xl">Saved Recipes</h3>
          <span
            onClick={() => dispatch(resetSaved())}
            className="font-semibold text-xl text-green-800 cursor-pointer"
          >
            Remove All
          </span>
        </div>
        <div className="grid grid-cols-3 my-40 items-center justify-items-center gap-24">
          {savedData.map((item) => (
            <SavedItem item={item} key={item.id}></SavedItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Saved;
