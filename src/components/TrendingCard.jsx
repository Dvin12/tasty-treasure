function TrendingCard({ trendingItem }) {
  return (
    <article className="w-full">
      <div className="flex flex-col gap-2 ">
        <img
          src={trendingItem.image}
          alt={trendingItem.title}
          className=" h-[360px] w-full object-fill rounded-3xl "
        />
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold w-[320px] my-4 text-gray-800">
            {trendingItem.title}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default TrendingCard;
