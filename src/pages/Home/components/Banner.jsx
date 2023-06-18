import { banner } from "../../../assets/img/img";

function Banner() {
  return (
    <section className="relative  w-full overflow-auto ">
      <img
        src={banner}
        alt=""
        className="  w-full  object-cover  brightness-75 xl:h-[560px] "
      />
      <article className="flex flex-col items-start justify-center rounded-xl bg-gray-200 p-12 text-center xl:absolute xl:right-40  xl:top-48">
        <h3 className="text-3xl font-medium">50+ Breakfast Recipes</h3>
        <span className="my-2 text-lg text-gray-600 ">
          Find the perfect food recipes to start your day tasty.
        </span>
      </article>
    </section>
  );
}

export default Banner;
