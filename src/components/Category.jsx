import { Link } from "react-router-dom";
import { american, indian, japanese, italian } from "../assets/img/img";

function Category() {
  return (
    <section className="">
      <div className="flex flex-wrap items-center justify-center gap-4  xl:gap-12 ">
        <Link
          to="/recipes/Italian"
          className="relative flex    w-[160px] cursor-pointer items-center justify-center overflow-hidden xl:w-[300px] "
        >
          <img
            src={italian}
            alt="italian"
            className="rounded-2xl  brightness-[0.45] duration-300   hover:scale-110  hover:brightness-[0.30] "
          />
          <h4 className="top-50% right-50%  absolute text-2xl font-medium tracking-wide text-white xl:text-3xl">
            Italian
          </h4>
        </Link>

        <Link
          to="/recipes/American"
          className="relative flex     w-[160px] cursor-pointer items-center justify-center overflow-hidden xl:w-[300px] "
        >
          <img
            src={american}
            alt="italian"
            className="rounded-2xl  brightness-[0.45] duration-300  hover:scale-110 hover:brightness-[0.30] "
          />
          <h4 className="top-50% right-50%  absolute text-2xl font-medium tracking-wide text-white xl:text-3xl">
            American
          </h4>
        </Link>

        <Link
          to="/recipes/Indian"
          className="relative flex   w-[160px] cursor-pointer items-center justify-center overflow-hidden xl:w-[300px]"
        >
          <img
            src={indian}
            alt="italian"
            className="rounded-2xl object-cover brightness-[0.45] duration-300  hover:scale-110 hover:brightness-[0.30] "
          />
          <h4 className="top-50% right-50%  absolute text-2xl font-medium tracking-wide text-white xl:text-3xl">
            Indian
          </h4>
        </Link>

        <Link
          to="/recipes/Japanese"
          className="relative flex   w-[160px] cursor-pointer items-center justify-center overflow-hidden xl:w-[300px]"
        >
          <img
            src={japanese}
            alt="italian"
            className="rounded-2xl  object-cover brightness-[0.45] duration-300  hover:scale-110 hover:brightness-[0.30] "
          />
          <h4 className="top-50% right-50%  absolute text-2xl font-medium tracking-wide text-white xl:text-3xl">
            Japanese
          </h4>
        </Link>
      </div>
    </section>
  );
}

export default Category;
