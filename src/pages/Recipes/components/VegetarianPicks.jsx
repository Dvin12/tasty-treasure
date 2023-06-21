import { useEffect, useState } from "react";
import VegetarianSlide from "./VegetarianSlide";
import VegetarianSlidePhone from "./VegetarianSlidePhone";
import VegetarianSlideTablet from "./VegetarianSlideTablet";
import VegetarianSlideLaptop from "./VegetarianSlideLaptop";

function VegetarianPicks({ vegetarian }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
      setIsLaptop(window.innerWidth > 1024 && window.innerWidth <= 1440);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="mt-20 xl:mx-8 2xl:mx-60">
      <h2 className="px-4 text-center text-3xl font-medium xl:px-8 xl:text-left">
        Most Viewed Vegetarian Recipes
      </h2>
      {isMobile ? (
        <VegetarianSlidePhone vegetarian={vegetarian}></VegetarianSlidePhone>
      ) : isTablet ? (
        <VegetarianSlideTablet vegetarian={vegetarian}></VegetarianSlideTablet>
      ) : isLaptop ? (
        <VegetarianSlideLaptop vegetarian={vegetarian}></VegetarianSlideLaptop>
      ) : (
        <VegetarianSlide vegetarian={vegetarian}></VegetarianSlide>
      )}
    </section>
  );
}
export default VegetarianPicks;
