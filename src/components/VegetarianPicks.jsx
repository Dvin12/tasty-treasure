import VegetarianCard from "./VegetarianCard";

function VegetarianPicks({ vegetarian }) {
  console.log(vegetarian);
  return (
    <section className="mx-60 p-8 my-10">
      <h2 className="text-3xl font-medium">Most Viewed Vegetarian Recipes</h2>
      <div>
        {vegetarian.slice(0, 4).map((item) => (
          <VegetarianCard></VegetarianCard>
        ))}
      </div>
    </section>
  );
}

export default VegetarianPicks;
