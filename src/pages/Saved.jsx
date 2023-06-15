import Search from "../components/Search";

function Saved() {
  return (
    <section className="h-screen bg-gray-200">
      <div className="py-60 mx-60 flex items-center justify-between">
        <h3 className=" font-medium text-4xl">Saved Recipes</h3>
        <span className="font-semibold text-xl text-green-800 cursor-pointer">
          Remove All
        </span>
      </div>
    </section>
  );
}

export default Saved;
