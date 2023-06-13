import "@splidejs/splide/css/sea-green";
import ReviewSlideXl from "./ReviewSlideXL";
import ReviewSlidePhone from "./ReviewSlidePhone";
import { useEffect, useState } from "react";

function Reviews({ reviews }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main className="bg-gray-200">
      <section className="xl:mx-60 xl:py-20 py-4">
        <h2 className="text-center xl:text-5xl text-2xl font-semibold">
          Community Highlights
        </h2>
        {isMobile ? (
          <ReviewSlidePhone reviews={reviews}></ReviewSlidePhone>
        ) : (
          <ReviewSlideXl reviews={reviews}></ReviewSlideXl>
        )}
      </section>
    </main>
  );
}

export default Reviews;
