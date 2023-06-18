import { Link } from "react-router-dom";
import { dish1, dish2 } from "../assets/img/img";

function Header() {
  return (
    <header className="h-screen bg-emerald-900 text-gray-100 ">
      <section className="relative flex h-fit flex-col items-center justify-center px-4 py-24 xl:mx-60  xl:grid xl:w-fit xl:grid-cols-2 xl:py-80">
        <article className="flex w-full flex-col items-center justify-center xl:block">
          <h1 className="text-center text-4xl font-medium  xl:w-[530px]  xl:text-left xl:text-6xl ">
            The Easiest Way To Make Your Favourite Meal
          </h1>
          <p className="my-12 text-center font-medium text-gray-400 xl:my-10 xl:w-[660px] xl:text-left xl:text-lg">
            Discover 1000+ recipes in the palm of your hand. Find the easiest
            way to cook with less amount of time spend.
          </p>
          <Link to="recipes">
            <button className="order-last rounded-lg bg-green-600 px-8 py-3 text-lg duration-300 hover:bg-green-700">
              Explore Recipes
            </button>
          </Link>
        </article>
        <article className="   flex flex-col  items-center justify-center xl:relative  xl:w-[800px]">
          <img
            src={dish1}
            alt="food"
            className="absolute bottom-[-120px] left-6 w-48 xl:bottom-[-120px] xl:left-0 xl:w-[420px] xl:drop-shadow-lg"
          />
          <img
            src={dish2}
            alt="food"
            className=" absolute left-28 top-[520px] z-20 w-60 drop-shadow-lg xl:left-40 xl:top-[-170px] xl:w-[580px]"
          />
        </article>
      </section>
    </header>
  );
}

export default Header;
