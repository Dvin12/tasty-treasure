import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReviewCard from "./ReviewCard";

function ReviewSlidePhone({ reviews }) {
  return (
    <Splide
      options={{
        gap: 80,
        type: "loop",
        arrows: false,
        autoplay: true,
        pagination: false,
        interval: 9000,
        resetProgress: true,
      }}
    >
      {reviews.map((items) => (
        <SplideSlide>
          <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default ReviewSlidePhone;
