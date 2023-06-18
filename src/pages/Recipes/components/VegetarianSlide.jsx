import { Splide, SplideSlide } from "@splidejs/react-splide";
import VegetarianCard from "./VegetarianCard";
import { Link } from "react-router-dom";

function VegetarianSlide({ vegetarian }) {
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
export default VegetarianSlide;
