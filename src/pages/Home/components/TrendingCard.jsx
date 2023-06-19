function TrendingCard({ trendingItem }) {
  return (
    <article>
      <div className="flex h-[400px] w-full flex-col gap-3 ">
        <img
          src={trendingItem.image}
          alt={trendingItem.title}
          className=" h-fit w-full  rounded-3xl object-fill "
        />
        <div className="flex items-center justify-between">
          <h3 className="my-6 w-full text-2xl font-semibold text-gray-800 xl:w-[360px]">
            {trendingItem.title}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default TrendingCard;
