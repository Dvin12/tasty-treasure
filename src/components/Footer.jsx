import { SiCodechef } from "react-icons/si";
function Footer() {
  return (
    <footer className="bg-green-900">
      <section className="mx-48 p-10">
        <article className="grid grid-cols-2">
          <div className="flex flex-col">
            <div className="flex text-gray-200 text-3xl">
              <SiCodechef className="text-4xl"></SiCodechef>
              <span>TastyTreasure</span>
            </div>
            <p className="w-[400px] text-gray-400 my-6">
              Discover 1000+ recipes in the palm of your hand.Find the easiest
              way to cook with less amount of time spend.
            </p>
          </div>
          <div className="w-full">
            <span className="text-2xl text-gray-200">
              Sign up for our newsletter
            </span>
            <div className="relative flex items-start justify-center">
              <input
                type="text"
                placeholder="Your email address"
                className="py-4 w-full bg-transparent border-gray-500 border-b-[3px] "
              />
              <button className="absolute right-0 bg-green-700 py-3 px-10 rounded-lg text-gray-200">
                Submit
              </button>
            </div>
            <div className="grid grid-cols-3 w-full">
              <ul>
                Menu
                <li>Home</li>
                <li>Recipes</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
              <ul>
                Help
                <li>Privacy and Policy</li>
                <li>Term of Use</li>
              </ul>
              <ul>
                Social
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
