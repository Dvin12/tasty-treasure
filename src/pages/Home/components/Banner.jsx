import { banner } from "../../../assets/img/img";

function Banner() {
  return (
    <section className="relative  w-full overflow-auto ">
      <img
        src={banner}
        alt=""
        className="  w-full  object-cover  brightness-75 md:h-[460px] xl:h-[560px] "
      />
      <article className="flex flex-col items-start justify-center bg-gray-200 p-16 text-center md:absolute md:right-28 md:top-32 md:rounded-xl md:p-12 xl:right-40  xl:top-48">
        <div className="my-4 xl:text-left">
          <h3 className="text-3xl font-medium ">50+ Breakfast Recipes</h3>
          <span className="my-4 text-lg text-gray-600 xl:my-2">
            Find the perfect food recipes to start your day tasty.
          </span>
        </div>
      </article>
    </section>
  );
}

export default Banner;
