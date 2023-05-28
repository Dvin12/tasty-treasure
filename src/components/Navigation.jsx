import { SiCodechef } from "react-icons/si";
import { HiOutlineUser } from "react-icons/hi2";

function Navigation() {
  return (
    <nav className=" bg-green-900 text-gray-200 xl:text-xl">
      <div className="flex items-center justify-between mx-60 py-10">
        <section className="flex items-center">
          <SiCodechef className="text-5xl"></SiCodechef>
          <span>TastyTreasure</span>
        </section>
        <ul className="flex items-center justify-between gap-20">
          <li>Home</li>
          <li>Recipes</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <section className="flex items-center justify-center">
          <HiOutlineUser className="text-3xl"></HiOutlineUser>
        </section>
      </div>
    </nav>
  );
}

export default Navigation;
