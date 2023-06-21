import { Link } from "react-router-dom";
import { dish1, dish2 } from "../../../assets/img/img";

function Header() {
  return (
    <header className=" h-screen bg-emerald-900 text-gray-100 ">
      <section className="relative mx-4 flex h-auto  flex-col items-center justify-center py-28 md:py-40  xl:mx-10  xl:grid  xl:w-auto xl:grid-cols-2  xl:py-60 2xl:mx-60 2xl:py-72">
        <article className="flex  flex-col items-center justify-center xl:block">
          <h1 className="text-center text-4xl font-medium md:w-[600px]  md:text-6xl xl:w-[530px] xl:py-0   xl:text-left  ">
            The Easiest Way To Make Your Favourite Meal
          </h1>
          <p className="my-14  text-justify font-medium text-gray-400 md:my-14 md:w-[540px] xl:my-10 xl:w-[620px] xl:text-left xl:text-lg 2xl:w-[660px]">
            Explore a vast collection of over 1000 recipes at your fingertips.
            Discover the quickest and easiest ways to cook, saving you valuable
            time in the kitchen.
          </p>
          <Link to="recipes">
            <button className=" rounded-lg bg-green-600 px-8 py-3 text-lg duration-300 hover:bg-green-700  md:text-xl xl:px-8 xl:py-3 xl:text-lg">
              Explore Recipes
            </button>
          </Link>
        </article>
        <article className="flex flex-col  items-center justify-center   xl:relative  xl:w-auto">
          <img
            src={dish1}
            alt="food"
            className=" absolute bottom-[-120px] left-4  w-48 md:bottom-[-180px] md:left-36 md:w-[280px] xl:bottom-[-80px] xl:left-0 xl:w-[340px] xl:drop-shadow-lg 2xl:bottom-[-120px] 2xl:w-[420px]"
          />
          <img
            src={dish2}
            alt="food"
            className=" absolute right-2 top-[550px] z-20  w-56 drop-shadow-lg md:right-32 md:top-[610px] md:w-[360px] xl:left-40 xl:top-[-170px] xl:w-[480px] 2xl:w-[580px]"
          />
        </article>
      </section>
    </header>
  );
}

export default Header;
