import { Link } from "react-router-dom";
import TrendingCard from "./TrendingCard";
function Trending({ trending }) {
  return (
    <main className="h-full w-full bg-gray-200">
      <section className=" pt-14  xl:mx-10 xl:py-20 2xl:mx-60">
        <div className="flex flex-col items-center  xl:flex-row xl:justify-between">
          <div className="flex flex-col items-center justify-center xl:block">
            <h2 className="mb-2 text-center text-2xl font-semibold text-gray-900 md:text-4xl xl:text-left ">
              Current Trending Recipes
            </h2>
            <span className="text-center text-sm  font-medium text-gray-500 md:text-lg ">
              Our most popular recipes of this week
            </span>
          </div>
          <span className="py-6 text-xl font-medium text-green-700 md:text-2xl xl:py-0 xl:text-xl ">
            <Link to="recipes">See all</Link>
          </span>
        </div>
      </section>

      <section className="flex  flex-col items-center justify-center p-4 text-center xl:mx-10  xl:grid xl:grid-cols-3 xl:justify-items-center xl:gap-12 xl:p-0 xl:pb-28  xl:text-left 2xl:mx-60">
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
