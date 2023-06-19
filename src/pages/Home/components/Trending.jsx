import { Link } from "react-router-dom";
import TrendingCard from "./TrendingCard";
function Trending({ trending }) {
  return (
    <main className="h-full w-full bg-gray-200">
      <section className="py-16 xl:mx-60 xl:px-2 xl:py-20">
        <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between">
          <div className="flex flex-col items-center justify-center xl:block">
            <h2 className="mb-2 text-center text-2xl font-semibold text-gray-900 xl:text-left xl:text-4xl">
              Current Trending Recipes
            </h2>
            <span className="text-center text-sm  font-medium text-gray-500 xl:text-lg">
              Our most popular recipes of this week
            </span>
          </div>
          <span className="pt-4 text-lg font-medium text-green-700 xl:text-xl">
            <Link to="recipes">See all</Link>
          </span>
        </div>
      </section>

      <section className="flex flex-col items-center p-3 text-center  xl:mx-60 xl:grid xl:grid-cols-3 xl:justify-items-center xl:gap-12 xl:p-0  xl:pb-28 xl:text-left">
        {trending.map((items) => (
          <Link to={"/recipe/" + items.id}>
            <TrendingCard key={items.id} trendingItem={items} />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Trending;
