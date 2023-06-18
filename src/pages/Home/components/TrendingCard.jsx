function TrendingCard({ trendingItem }) {
  return (
    <article className="w-full">
      <div className="flex flex-col gap-2 ">
        <img
          src={trendingItem.image}
          alt={trendingItem.title}
          className=" h-[360px] w-full rounded-3xl object-fill "
        />
        <div className="flex items-center justify-between">
          <h3 className="my-4 w-[320px] text-2xl font-semibold text-gray-800 xl:w-[360px]">
            {trendingItem.title}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default TrendingCard;
