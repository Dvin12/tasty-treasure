import ReviewCard from "./ReviewCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/sea-green";

function Reviews({ reviews }) {
  console.log(reviews);
  return (
    <main className="bg-gray-200">
      <section className="mx-60 py-20 ">
        <h2 className="text-center text-5xl font-semibold">
          Community Highlights
        </h2>
        <Splide
          options={{
            gap: 60,
            padding: 20,
          }}
        >
          <SplideSlide>
            <div className="grid grid-cols-2 justify-items-center items-center my-20  gap-12">
              {reviews.slice(0, 4).map((items) => (
                <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
              ))}
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="grid grid-cols-2 justify-items-center items-center my-20  gap-12">
              {reviews.slice(5, 9).map((items) => (
                <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
              ))}
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="grid grid-cols-2 justify-items-center items-center my-20  gap-12">
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
