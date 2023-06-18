import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReviewCard from "./ReviewCard";
function ReviewSlideXl({ reviews }) {
  return (
    <Splide
      options={{
        gap: 60,
        padding: 40,
        pagination: false,
      }}
    >
      <SplideSlide>
        <div className="md:hidden xl:my-20 xl:grid xl:grid-cols-2 xl:items-center  xl:justify-items-center xl:gap-12">
          {reviews.slice(0, 4).map((items) => (
            <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
          ))}
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="md:hidden xl:my-20 xl:grid xl:grid-cols-2 xl:items-center  xl:justify-items-center xl:gap-12">
          {reviews.slice(5, 9).map((items) => (
            <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
          ))}
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="md:hidden xl:my-20 xl:grid xl:grid-cols-2 xl:items-center  xl:justify-items-center xl:gap-12">
          {reviews.slice(10, 14).map((items) => (
            <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
          ))}
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default ReviewSlideXl;
