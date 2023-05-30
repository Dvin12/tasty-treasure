import { SiCodechef } from "react-icons/si";
import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className=" bg-green-900 text-gray-200 xl:text-xl">
      <div className="flex items-center justify-between mx-60 py-10">
        <section className="flex items-center">
          <SiCodechef className="text-5xl"></SiCodechef>
          <span>TastyTreasure</span>
        </section>
        <ul className="flex items-center justify-between gap-20">
          <li className="cursor-pointer hover:text-green-400 duration-300">
            <Link to="/">Home </Link>
          </li>

          <li className="cursor-pointer hover:text-green-400 duration-300">
            <Link to="/recipes">Recipes </Link>
          </li>

          <li className="cursor-pointer hover:text-green-400 duration-300">
            <Link to="/about-us">About Us </Link>
          </li>

          <li className="cursor-pointer hover:text-green-400 duration-300">
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
        <section className="flex items-center justify-center">
          <Link to="/login">
            <HiOutlineUser className="text-3xl"></HiOutlineUser>
          </Link>
        </section>
      </div>
    </nav>
  );
}

export default Navigation;
