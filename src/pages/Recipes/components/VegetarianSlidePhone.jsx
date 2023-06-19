import { Splide, SplideSlide } from "@splidejs/react-splide";
import VegetarianCard from "./VegetarianCard";
import { Link } from "react-router-dom";

function VegetarianSlidePhone({ vegetarian }) {
  return (
    <div>
      <Splide
        options={{
          perPage: 1,
          padding: 0,
          gap: 10,
          pagination: false,
          arrows: false,
          autoplay: true,
          pagination: false,
          interval: 4000,
          resetProgress: true,
          type: "loop",
        }}
      >
        {vegetarian.map((item) => (
          <SplideSlide key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <VegetarianCard vegetarianData={item}></VegetarianCard>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default VegetarianSlidePhone;
