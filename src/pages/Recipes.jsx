import Category from "../components/Category";
import Search from "../components/Search";

function Recipes() {
  return (
    <section className="bg-gray-200 h-screen">
      <Search></Search>
      <Category></Category>
    </section>
  );
}

export default Recipes;
