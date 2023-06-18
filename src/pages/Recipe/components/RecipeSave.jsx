import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToSaved } from "../../../redux/tastySlice";
import { useState } from "react";

function RecipeFunctionality({ recipeDetails }) {
  const [notifaction, setNotification] = useState(false);
  const dispatch = useDispatch();
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
    <div className="order-last flex flex-col items-center justify-center xl:order-none">
      <img
        src={recipeDetails.image}
        alt={recipeDetails.title}
        className="rounded-2xl"
      />
      <button
        onClick={handleNotification}
        className="my-8 rounded-xl bg-green-600 p-4 text-lg font-medium text-gray-100 duration-300 hover:bg-green-700"
      >
        Save for later
      </button>

      <Link to="/recipes">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default RecipeFunctionality;
