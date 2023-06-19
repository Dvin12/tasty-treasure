import { SiCodechef } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbChefHat } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navigation() {
  const savedData = useSelector((state) => state.tasty.recipeDetails);

  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-emerald-900 text-sm  text-gray-200 transition-colors duration-300 xl:text-xl">
      <div className="relative flex flex-shrink-0 items-center justify-between p-3 md:p-6 xl:mx-60 xl:py-10	">
        <section>
          <Link to="/" className="flex items-center">
            <SiCodechef className="text-4xl"></SiCodechef>
            <span className="md:text-xl">TastyTreasure</span>
          </Link>
        </section>
        <ul
          className={`xl:flex xl:translate-x-[-60px] xl:gap-20 ${
            navOpen
              ? "absolute left-0 top-full flex w-full flex-col gap-4 bg-emerald-900 p-4 text-lg text-gray-200 transition-transform duration-300  md:gap-8 md:p-6  md:text-xl"
              : "hidden"
          } xl:flex`}
        >
          <li className="cursor-pointer duration-300 hover:text-green-400">
            <Link to="/">Home </Link>
          </li>

          <li className="cursor-pointer duration-300 hover:text-green-400">
            <Link to="/recipes">Recipes </Link>
          </li>

          <li className="cursor-pointer duration-300 hover:text-green-400">
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
        <section className="relative flex items-center justify-center gap-4">
          <Link to="/saved">
            <TbChefHat className="text-4xl"></TbChefHat>
            <div className="absolute bottom-5 left-5 flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <span className="font-medium text-black">{savedData.length}</span>
            </div>
          </Link>
          <GiHamburgerMenu
            className="cursor-pointer text-2xl md:text-3xl xl:hidden"
            onClick={handleClick}
          ></GiHamburgerMenu>
        </section>
      </div>
    </nav>
  );
}

export default Navigation;
