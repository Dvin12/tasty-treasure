import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromSaved } from "../../../redux/tastySlice";
import { Link } from "react-router-dom";

function SavedItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="">
      <Link to={"/recipe/" + item.id}>
        <img src={item.image} className="cursor-pointer rounded-2xl "></img>
      </Link>
      <div className="flex items-center justify-between p-1">
        <Link to={"/recipe/" + item.id}>
          <h3 className="my-4 w-56 cursor-pointer text-xl font-medium">
            {item.title}
          </h3>
        </Link>
        <FaTrash
          onClick={() => dispatch(removeFromSaved(item.id))}
          className="cursor-pointer text-xl"
        ></FaTrash>
      </div>
    </div>
  );
}

export default SavedItem;
