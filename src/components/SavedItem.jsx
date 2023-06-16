import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromSaved } from "../redux/tastySlice";
import { Link } from "react-router-dom";

function SavedItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="">
      <Link to={"/recipe/" + item.id}>
        <img src={item.image} className="rounded-2xl cursor-pointer "></img>
      </Link>
      <div className="flex items-center p-1 justify-between">
        <Link to={"/recipe/" + item.id}>
          <h3 className="text-xl my-4 font-medium cursor-pointer w-56">
            {item.title}
          </h3>
        </Link>
        <FaTrash
          onClick={() => dispatch(removeFromSaved(item.id))}
          className="text-xl cursor-pointer"
        ></FaTrash>
      </div>
    </div>
  );
}

export default SavedItem;
