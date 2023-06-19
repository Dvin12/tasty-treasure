function DiscoverCard({ discover }) {
  return (
    <div className="my-4 ">
      <div className="relative mb-12 flex  w-[300px] cursor-pointer items-center justify-center overflow-hidden">
        <img
          src={discover.image}
          alt={discover.title}
          className="h-full w-full rounded-3xl object-cover "
        />

        <div className="absolute flex h-full w-full items-center justify-center rounded-3xl bg-gray-900 opacity-80 duration-300 xl:opacity-0 xl:hover:opacity-90 ">
          <h4 className="  text-md absolute w-52 text-center font-medium   text-white ">
            {discover.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default DiscoverCard;
