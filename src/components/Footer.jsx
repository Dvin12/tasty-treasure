import { SiCodechef } from "react-icons/si";
function Footer() {
  return (
    <footer className="bg-emerald-900">
      <section className="mx-48 p-10 py-20">
        <article className="grid grid-cols-2">
          <div className="flex flex-col">
            <div className="flex text-gray-200 text-3xl">
              <SiCodechef className="text-4xl"></SiCodechef>
              <span>TastyTreasure</span>
            </div>
            <p className="w-[400px] text-gray-400 my-6">
              Discover 1000+ recipes in the palm of your hand. Find the easiest
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
            <div className="grid grid-cols-3   my-10 text-slate-400  ">
              <ul className="flex flex-col gap-1 ">
                <span className="text-2xl font-medium text-gray-200 mb-3">
                  Home
                </span>
                <li>Home</li>
                <li>Recipes</li>

                <li>Contact</li>
              </ul>
              <ul className="justify-self-center flex flex-col gap-1">
                <span className="text-2xl text-gray-200 mb-3 font-medium ">
                  Help
                </span>
                <li>Privacy and Policy</li>
                <li>Term of Use</li>
              </ul>
              <ul className="justify-self-end flex flex-col gap-1">
                <span className="text-2xl text-gray-200  mb-3 font-medium ">
                  Social
                </span>
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
