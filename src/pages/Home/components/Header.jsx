import { Link } from "react-router-dom";
import { dish1, dish2 } from "../../../assets/img/img";

function Header() {
  return (
    <header className="h-screen bg-emerald-900 text-gray-100 ">
      <section className="relative flex h-auto  flex-col items-center justify-center px-4 py-28 md:py-36 xl:mx-60  xl:grid xl:w-fit xl:grid-cols-2 xl:py-72">
        <article className="flex  flex-col items-center justify-center xl:block">
          <h1 className="text-center text-4xl font-medium md:w-[600px]  md:text-6xl xl:w-[530px] xl:py-0   xl:text-left xl:text-6xl ">
            The Easiest Way To Make Your Favourite Meal
          </h1>
          <p className="my-14  text-justify font-medium text-gray-400 md:my-14 md:w-[540px] md:text-xl xl:my-10 xl:w-[660px] xl:text-left xl:text-lg">
            Explore a vast collection of over 1000 recipes at your fingertips.
            Discover the quickest and easiest ways to cook, saving you valuable
            time in the kitchen.
          </p>
          <Link to="recipes">
            <button className="order-last rounded-lg bg-green-600 px-8 py-3 text-lg duration-300 hover:bg-green-700 md:px-14 md:py-5 md:text-xl xl:px-8 xl:py-3 xl:text-lg">
              Explore Recipes
            </button>
          </Link>
        </article>
        <article className="   flex flex-col  items-center justify-center  xl:relative  xl:w-[800px]">
          <img
            src={dish1}
            alt="food"
            className=" absolute bottom-[-120px] left-8  w-48 md:bottom-[-180px] md:left-36 md:w-[280px] xl:bottom-[-120px] xl:left-0 xl:w-[420px] xl:drop-shadow-lg"
          />
          <img
            src={dish2}
            alt="food"
            className=" absolute right-6 top-[550px] z-20  w-56 drop-shadow-lg md:right-32 md:top-[610px] md:w-[360px] xl:left-40 xl:top-[-170px] xl:w-[580px]"
          />
        </article>
      </section>
    </header>
  );
}

export default Header;
