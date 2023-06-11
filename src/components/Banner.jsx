import { banner } from "../assets/img/img";

function Banner() {
  return (
    <section className="w-full  relative overflow-auto ">
      <img
        src={banner}
        alt=""
        className="  brightness-75  w-full  h-[560px] object-cover "
      />
      <article className="bg-gray-200 flex flex-col items-start justify-center absolute right-40 top-48 p-12 rounded-xl ">
        <h3 className="text-3xl font-medium">50+ Breakfast Recipes</h3>
        <span className="text-lg my-2 text-gray-600 ">
          Find the perfect food recipes to start your day tasty.
        </span>
      </article>
    </section>
  );
}

export default Banner;
