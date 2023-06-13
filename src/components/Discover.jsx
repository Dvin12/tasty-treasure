import { Splide, SplideSlide } from "@splidejs/react-splide";
import DiscoverCard from "./DiscoverCard";
import { Link } from "react-router-dom";

function Discover({ discover }) {
  return (
    <section className="xl:mx-60  ">
      <h2 className="text-3xl px-8 text-center xl:text-left font-medium">
        Discover Something New
      </h2>
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
              <Link to={"/recipe/" + item.id}>
                <DiscoverCard key={item.id} discover={item}></DiscoverCard>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default Discover;
