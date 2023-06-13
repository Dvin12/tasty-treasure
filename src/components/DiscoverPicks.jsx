import { Splide, SplideSlide } from "@splidejs/react-splide";
import DiscoverCard from "./DiscoverCard";
import { Link } from "react-router-dom";

function DiscoverPicks({ discover }) {
  return (
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
  );
}

export default DiscoverPicks;
