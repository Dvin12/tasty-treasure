import { Link } from "react-router-dom";
import { dish1, dish2 } from "../assets/img/img";

function Header() {
  return (
    <header className="bg-emerald-900 text-gray-100 h-screen ">
      <section className="xl:grid xl:grid-cols-2 xl:w-fit xl:mx-60 items-center justify-center h-fit px-4 py-28  xl:py-80 flex flex-col relative">
        <article className="w-full flex flex-col items-center justify-center xl:block">
          <h1 className="xl:text-6xl xl:w-[530px] font-medium  leading-normal text-4xl  text-center xl:text-left ">
            The Easiest Way To Make Your Favourite Meal
          </h1>
          <p className="xl:text-md xl:w-[750px] text-gray-400 font-medium xl:my-8 my-12 text-center xl:text-left">
            Discover 1000+ recipes in the palm of your hand. Find the easiest
            way to cook with less amount of time spend.
          </p>
          <Link to="recipes">
            <button className="bg-green-600 px-8 py-3 rounded-xl text-lg hover:bg-green-700 duration-300 order-last">
              Explore Recipes
            </button>
          </Link>
        </article>
        <article className="   flex flex-col  justify-center items-center xl:relative  xl:w-[800px]">
          <img
            src={dish1}
            alt="food"
            className="absolute left-6 bottom-[-120px] xl:left-0 xl:bottom-[-100px] xl:w-[420px] xl:drop-shadow-lg w-48"
          />
          <img
            src={dish2}
            alt="food"
            className=" absolute left-28 top-[520px] xl:left-40 xl:top-[-180px] xl:w-[600px] drop-shadow-lg z-20 w-60"
          />
        </article>
      </section>
    </header>
  );
}

export default Header;
