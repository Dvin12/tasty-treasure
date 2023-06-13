import { useEffect, useState } from "react";
import VegetarianSlide from "./VegetarianSlide";
import VegetarianSlidePhone from "./VegetarianSlidePhone";

function VegetarianPicks({ vegetarian }) {
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
    <section className="xl:mx-60  mt-20 ">
      <h2 className="text-3xl font-medium xl:px-8 xl:text-left text-center px-4">
        Most Viewed Vegetarian Recipes
      </h2>
      {isMobile ? (
        <VegetarianSlidePhone vegetarian={vegetarian}></VegetarianSlidePhone>
      ) : (
        <VegetarianSlide vegetarian={vegetarian}></VegetarianSlide>
      )}
    </section>
  );
}

export default VegetarianPicks;
