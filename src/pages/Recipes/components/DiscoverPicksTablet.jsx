import { Splide, SplideSlide } from "@splidejs/react-splide";
import DiscoverCard from "./DiscoverCard";
import { Link } from "react-router-dom";

function DiscoverPicksTablet({ discover }) {
  return (
    <div>
      <Splide
        options={{
          perPage: 2,
          padding: 20,
          gap: 20,
          pagination: false,
          arrows: true,
          autoplay: true,
          pagination: false,
          interval: 4000,
          resetProgress: true,
          type: "loop",
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

export default DiscoverPicksTablet;
