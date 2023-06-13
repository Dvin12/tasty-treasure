import ReviewCard from "./ReviewCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/sea-green";

function Reviews({ reviews }) {
  console.log(reviews);
  return (
    <main className="bg-gray-200">
      <section className="xl:mx-60 xl:py-20 py-4">
        <h2 className="text-center xl:text-5xl text-2xl font-semibold">
          Community Highlights
        </h2>
        <Splide
          options={{
            gap: 60,
            padding: 20,
          }}
        >
          <SplideSlide>
            <div className="xl:grid xl:grid-cols-2 xl:justify-items-center xl:items-center xl:my-20  xl:gap-12">
              {reviews.slice(0, 4).map((items) => (
                <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
              ))}
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="xl:grid xl:grid-cols-2 xl:justify-items-center xl:items-center xl:my-20  xl:gap-12">
              {reviews.slice(5, 9).map((items) => (
                <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
              ))}
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="xl:grid xl:grid-cols-2 xl:justify-items-center xl:items-center xl:my-20  xl:gap-12">
              {reviews.slice(10, 14).map((items) => (
                <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
              ))}
            </div>
          </SplideSlide>
        </Splide>
      </section>
    </main>
  );
}

export default Reviews;
