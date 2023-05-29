import { dish1, dish2 } from "../assets/img/img";

function Header() {
  return (
    <header className="bg-green-900 text-gray-100 h-full  py-40">
      <section className="grid grid-cols-2 w-fit mx-60 items-center justify-center h-fit ">
        <article className="w-full">
          <h1 className="text-6xl w-[530px] font-medium  leading-normal ">
            The Easiest Way To Make Your Favourite Meal
          </h1>
          <p className="text-md w-[750px] text-gray-400 font-medium my-8">
            Discover 1000+ recipes in the palm of your hand. Find the easiest
            way to cook with less amount of time spend.
          </p>
          <button className="bg-green-600 px-8 py-3 rounded-xl text-lg">
            Explore Recipes
          </button>
        </article>
        <article className="   flex justify-self-center items-center relative w-[800px]">
          <img
            src={dish1}
            alt="food"
            className="absolute left-0 bottom-[-100px] w-[420px] drop-shadow-lg"
          />
          <img
            src={dish2}
            alt="food"
            className=" absolute left-40 w-[640px] drop-shadow-lg z-20"
          />
        </article>
      </section>
    </header>
  );
}

export default Header;
