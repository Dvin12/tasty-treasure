import { american, indian, japanese, italian } from "../assets/img/img";

function Category() {
  return (
    <section className="">
      <div className="flex items-center justify-center gap-12 ">
        <div className="w-[300px]    relative flex items-center justify-center cursor-pointer overflow-hidden ">
          <img
            src={italian}
            alt="italian"
            className="rounded-2xl  brightness-[0.45] hover:brightness-[0.30]   duration-300  hover:scale-110 "
          />
          <h4 className="absolute top-50%  right-50% text-white text-3xl">
            Italian
          </h4>
        </div>

        <div className="max-w-[300px]     relative flex items-center justify-center cursor-pointer overflow-hidden ">
          <img
            src={american}
            alt="italian"
            className="rounded-2xl  brightness-[0.45] hover:brightness-[0.30]  duration-300 hover:scale-110 "
          />
          <h4 className="absolute top-50%  right-50% text-white text-3xl ">
            American
          </h4>
        </div>

        <div className="w-[300px]   relative flex items-center justify-center cursor-pointer overflow-hidden">
          <img
            src={indian}
            alt="italian"
            className="rounded-2xl object-cover brightness-[0.45] hover:brightness-[0.30]  duration-300 hover:scale-110 "
          />
          <h4 className="absolute top-50%  right-50% text-white text-3xl">
            Indian
          </h4>
        </div>
        <div className="w-[300px]  relative flex items-center justify-center cursor-pointer overflow-hidden">
          <img
            src={japanese}
            alt="italian"
            className="rounded-2xl  object-cover brightness-[0.45] hover:brightness-[0.30]  duration-300 hover:scale-110 "
          />
          <h4 className="absolute top-50%  right-50% text-white text-3xl">
            Japanese
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Category;
