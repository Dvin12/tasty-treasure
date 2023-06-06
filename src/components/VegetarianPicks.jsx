import { Splide, SplideSlide } from "@splidejs/react-splide";

import VegetarianCard from "./VegetarianCard";

function VegetarianPicks({ vegetarian }) {
  return (
    <section className="mx-60  my-20">
      <h2 className="text-3xl font-medium px-8">
        Most Viewed Vegetarian Recipes
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
          {vegetarian.map((item) => (
            <SplideSlide key={item.id}>
              <VegetarianCard vegetarianData={item}></VegetarianCard>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default VegetarianPicks;
