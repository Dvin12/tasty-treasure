function CuisneCard({ cuisine }) {
  console.log(cuisine);
  return (
    <div className="flex items-center justify-center relative">
      <img
        src={cuisine.image}
        alt={cuisine.title}
        className="rounded-3xl drop-shadow-md"
      />
      <div className="bg-gray-900 absolute w-full h-full rounded-3xl opacity-0 hover:opacity-90 duration-300 flex items-center justify-center cursor-pointer ">
        <h4 className="absolute text-white text-center w-60">
          {cuisine.title}
        </h4>
      </div>
    </div>
  );
}

export default CuisneCard;
