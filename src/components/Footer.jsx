import { SiCodechef } from "react-icons/si";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className=" bg-emerald-900">
      <section className="p-4 py-14 xl:mx-8 xl:p-0 xl:py-28 2xl:mx-60">
        <article className="flex flex-col items-center justify-center xl:grid xl:grid-cols-2 xl:items-start">
          <div className="my-4 flex flex-col items-center xl:items-start">
            <div className="flex text-3xl text-gray-200">
              <SiCodechef className="text-4xl"></SiCodechef>
              <span>TastyTreasure</span>
            </div>
            <p className="my-4 p-2 text-justify text-gray-400 md:text-center xl:w-[400px] xl:p-0 xl:text-left">
              Explore a vast collection of over 1000 recipes at your fingertips.
              Discover the quickest and easiest ways to cook, saving you
              valuable time in the kitchen.
            </p>
          </div>
          <div className="flex w-full flex-col items-center xl:items-start">
            <span className="mb-8 text-2xl text-gray-200 xl:mb-4">
              Sign up for our newsletter
            </span>
            <div className="relative flex w-full items-start justify-center">
              <input
                type="text"
                placeholder="Your email address"
                className="w-full border-b-[3px] border-gray-500 bg-transparent py-4 text-white  outline-none"
              />
              <button className="absolute right-0 rounded-lg bg-green-600 px-2 py-2 text-sm text-gray-200 duration-300 hover:bg-green-700 md:px-6 md:py-3 md:text-base">
                Submit
              </button>
            </div>
            <div className="my-14 grid   grid-cols-3 text-slate-400 xl:my-10  ">
              <ul className="flex flex-col gap-1 md:w-[300px] ">
                <span className="mb-3 text-2xl font-medium text-gray-200">
                  Home
                </span>
                <Link to="/">
                  <li className="cursor-pointer duration-300 hover:text-gray-200">
                    Home
                  </li>
                </Link>
                <Link to="/recipes">
                  <li className="cursor-pointer duration-300 hover:text-gray-200">
                    Recipes
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="cursor-pointer duration-300 hover:text-gray-200">
                    Contact
                  </li>
                </Link>
              </ul>
              <ul className="flex flex-col gap-1 justify-self-center">
                <span className="mb-3 text-2xl font-medium text-gray-200 ">
                  Help
                </span>
                <li className="cursor-pointer duration-300 hover:text-gray-200">
                  Privacy and Policy
                </li>
                <li className="cursor-pointer duration-300 hover:text-gray-200">
                  Term of Use
                </li>
              </ul>
              <ul className="flex flex-col gap-1 justify-self-end">
                <span className="mb-3 text-2xl  font-medium text-gray-200 ">
                  Social
                </span>
                <li className="cursor-pointer duration-300 hover:text-gray-200">
                  Twitter
                </li>
                <li className="cursor-pointer duration-300 hover:text-gray-200">
                  Instagram
                </li>
                <li className="cursor-pointer duration-300 hover:text-gray-200">
                  Youtube
                </li>
                <li className="cursor-pointer duration-300 hover:text-gray-200">
                  Facebook
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
