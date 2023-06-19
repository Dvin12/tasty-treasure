import { banner } from "../../../assets/img/img";

function Banner() {
  return (
    <section className="relative  w-full overflow-auto ">
      <img
        src={banner}
        alt=""
        className="  w-full  object-cover  brightness-75 xl:h-[560px] "
      />
      <article className="flex flex-col items-start justify-center bg-gray-200 p-16 text-center xl:absolute xl:right-40 xl:top-48 xl:rounded-xl  xl:p-12">
        <h3 className="text-3xl font-medium">50+ Breakfast Recipes</h3>
        <span className="my-4 text-lg text-gray-600 xl:my-2">
          Find the perfect food recipes to start your day tasty.
        </span>
      </article>
    </section>
  );
}

export default Banner;