function DiscoverCard({ discover }) {
  return (
    <div className="my-4 ">
      <div className="w-[300px] relative overflow-hidden  flex items-center justify-center cursor-pointer mb-12">
        <img
          src={discover.image}
          alt={discover.title}
          className="rounded-3xl object-cover w-full h-full "
        />

        <div className="bg-gray-900 absolute w-full h-full rounded-3xl opacity-0 hover:opacity-90 duration-300 flex items-center justify-center ">
          <h4 className="  absolute text-white text-md text-center font-medium   w-52 ">
            {discover.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default DiscoverCard;
