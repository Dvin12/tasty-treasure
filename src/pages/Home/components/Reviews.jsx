import "@splidejs/splide/css/sea-green";
import ReviewSlideXl from "../components/ReviewSlideXL";
import ReviewSlidePhone from "../components/ReviewSlidePhone";
import { useEffect, useState } from "react";

function Reviews({ reviews }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main className="bg-gray-200">
      <section className="py-12  xl:mx-60 xl:py-28 ">
        <h2 className="text-center text-3xl font-semibold md:text-4xl xl:text-5xl">
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
