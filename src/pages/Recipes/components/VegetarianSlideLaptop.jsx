import { Splide, SplideSlide } from "@splidejs/react-splide";
import VegetarianCard from "./VegetarianCard";
import { Link } from "react-router-dom";

function VegetarianSlideLaptop({ vegetarian }) {
  return (
    <div>
      <Splide
        options={{
          perPage: 3,
          padding: 10,
          gap: -80,
          pagination: false,
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

export default VegetarianSlideLaptop;
