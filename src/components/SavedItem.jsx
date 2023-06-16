import { FaTrash } from "react-icons/fa";

function SavedItem({ item }) {
  return (
    <div className="">
      <img src={item.image} className="rounded-2xl cursor-pointer "></img>
      <div className="flex items-center justify-between">
        <h3 className="text-xl my-4 font-medium cursor-pointer">
          {item.title}
        </h3>
        <FaTrash className="text-xl cursor-pointer"></FaTrash>
      </div>
    </div>
  );
}

export default SavedItem;
