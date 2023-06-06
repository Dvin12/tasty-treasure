import DiscoverCard from "./DiscoverCard";

function Discover({ discover }) {
  return (
    <section className="mx-60  ">
      <h2 className="text-3xl px-8 font-medium">Discover Something New</h2>
      <div className="flex">
        {discover.map((item) => (
          <DiscoverCard key={item.id} discover={item}></DiscoverCard>
        ))}
      </div>
    </section>
  );
}

export default Discover;
