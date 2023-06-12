import { SiCodechef } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);

  const [navBarTransparent, setNavBarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 620) {
        setNavBarTransparent(false);
      } else {
        setNavBarTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-emerald-900 text-gray-200 xl:text-xl text-sm transition-colors duration-300 z-50 ${
        navBarTransparent ? "bg-transparent" : ""
      }`}
    >
      <div className="flex items-center justify-between xl:mx-60 xl:py-10 flex-shrink-0 p-3 relative	">
        <section>
          <Link to="/" className="flex items-center">
            <SiCodechef className="text-4xl"></SiCodechef>
            <span>TastyTreasure</span>
          </Link>
        </section>
        <ul
          className={`xl:flex xl:gap-20 xl:translate-x-[-70px] ${
            navOpen
              ? "flex flex-col gap-4 text-lg absolute top-full left-0 w-full bg-emerald-900 text-gray-200  transition-transform duration-300"
              : "hidden"
          } md:flex`}
        >
          <li className="cursor-pointer hover:text-green-400 duration-300">
            <Link to="/">Home </Link>
          </li>

          <li className="cursor-pointer hover:text-green-400 duration-300">
            <Link to="/recipes">Recipes </Link>
          </li>

          <li className="cursor-pointer hover:text-green-400 duration-300">
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
        <section className="flex items-center justify-center gap-4">
          <Link to="/login">
            <HiOutlineUser className="text-3xl"></HiOutlineUser>
          </Link>
          <GiHamburgerMenu
            className="text-2xl cursor-pointer md:hidden"
            onClick={handleClick}
          ></GiHamburgerMenu>
        </section>
      </div>
    </nav>
  );
}

export default Navigation;
