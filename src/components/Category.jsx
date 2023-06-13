import { Link } from "react-router-dom";
import { american, indian, japanese, italian } from "../assets/img/img";

function Category() {
  return (
    <section className="">
      <div className="flex items-center justify-center xl:gap-12 gap-4  flex-wrap ">
        <Link
          to="/recipes/Italian"
          className="xl:w-[300px] w-[160px]    relative flex items-center justify-center cursor-pointer overflow-hidden "
        >
          <img
            src={italian}
            alt="italian"
            className="rounded-2xl  brightness-[0.45] hover:brightness-[0.30]   duration-300  hover:scale-110 "
          />
          <h4 className="absolute top-50%  right-50% text-white xl:text-3xl text-2xl font-medium tracking-wide">
            Italian
          </h4>
        </Link>

        <Link
          to="/recipes/American"
          className="xl:w-[300px] w-[160px]     relative flex items-center justify-center cursor-pointer overflow-hidden "
        >
          <img
            src={american}
            alt="italian"
            className="rounded-2xl  brightness-[0.45] hover:brightness-[0.30]  duration-300 hover:scale-110 "
          />
          <h4 className="absolute top-50%  right-50% text-white xl:text-3xl text-2xl font-medium tracking-wide">
            American
          </h4>
        </Link>

        <Link
          to="/recipes/Indian"
          className="xl:w-[300px] w-[160px]   relative flex items-center justify-center cursor-pointer overflow-hidden"
        >
          <img
            src={indian}
            alt="italian"
            className="rounded-2xl object-cover brightness-[0.45] hover:brightness-[0.30]  duration-300 hover:scale-110 "
          />
          <h4 className="absolute top-50%  right-50% text-white xl:text-3xl text-2xl font-medium tracking-wide">
            Indian
          </h4>
        </Link>

        <Link
          to="/recipes/Japanese"
          className="xl:w-[300px] w-[160px]   relative flex items-center justify-center cursor-pointer overflow-hidden"
        >
          <img
            src={japanese}
            alt="italian"
            className="rounded-2xl  object-cover brightness-[0.45] hover:brightness-[0.30]  duration-300 hover:scale-110 "
          />
          <h4 className="absolute top-50%  right-50% text-white xl:text-3xl text-2xl font-medium tracking-wide">
            Japanese
          </h4>
        </Link>
      </div>
    </section>
  );
}

export default Category;
