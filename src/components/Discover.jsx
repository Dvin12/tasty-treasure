import { Splide, SplideSlide } from "@splidejs/react-splide";
import DiscoverCard from "./DiscoverCard";

function Discover({ discover }) {
  return (
    <section className="mx-60  ">
      <h2 className="text-3xl px-8 font-medium">Discover Something New</h2>
      <div>
        <Splide
          options={{
            perPage: 4,
            padding: 20,
            gap: 20,
            pagination: false,
          }}
        >
          {discover.map((item) => (
            <SplideSlide>
              <DiscoverCard key={item.id} discover={item}></DiscoverCard>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default Discover;
