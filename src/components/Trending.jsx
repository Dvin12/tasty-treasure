import { Link } from "react-router-dom";
import TrendingCard from "./TrendingCard";
function Trending({ trending }) {
  return (
    <main className="bg-gray-200 w-full h-full">
      <section className="xl:mx-60 xl:py-20 py-10">
        <div className="flex flex-col items-center justify-center xl:justify-between">
          <div>
            <h2 className="xl:text-4xl font-semibold text-gray-900 mb-2 text-center text-xl">
              Current Trending Recipes
            </h2>
            <span className="text-gray-500 font-medium text-sm">
              Our most popular recipes of this week
            </span>
          </div>
          <span className="text-green-700 xl:text-xl text-lg pt-4 font-medium">
            <Link to="recipes">See all</Link>
          </span>
        </div>
      </section>

      <section className="xl:mx-60 xl:pb-20 xl:grid xl:grid-cols-3 xl:justify-items-center xl:gap-12 flex flex-col text-center p-3">
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
