import TrendingCard from "./TrendingCard";
function Trending({ trendingItems }) {
  console.log(trendingItems);
  return (
    <main className="bg-gray-200 w-full h-full">
      <section className="mx-60 py-20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-2">
              Current Trending Recipes
            </h2>
            <span className="text-gray-500 font-medium">
              Our most popular recipes of this week
            </span>
          </div>
          <span className="text-green-700 text-lg font-medium">See all</span>
        </div>
      </section>

      <section className="mx-60 pb-20 grid grid-cols-3 justify-items-center gap-20">
        {trendingItems.recipes.map((items) => (
          <TrendingCard></TrendingCard>
        ))}
      </section>
    </main>
  );
}

export default Trending;
