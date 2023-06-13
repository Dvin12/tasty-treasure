import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReviewCard from "./ReviewCard";
function ReviewSlideXl({ reviews }) {
  return (
    <Splide
      options={{
        gap: 60,
        padding: 20,
      }}
    >
      <SplideSlide>
        <div className="xl:grid xl:grid-cols-2 xl:justify-items-center xl:items-center xl:my-20  xl:gap-12 md:hidden">
          {reviews.slice(0, 4).map((items) => (
            <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
          ))}
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="xl:grid xl:grid-cols-2 xl:justify-items-center xl:items-center xl:my-20  xl:gap-12 md:hidden">
          {reviews.slice(5, 9).map((items) => (
            <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
          ))}
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="xl:grid xl:grid-cols-2 xl:justify-items-center xl:items-center xl:my-20  xl:gap-12 md:hidden">
          {reviews.slice(10, 14).map((items) => (
            <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
          ))}
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default ReviewSlideXl;
