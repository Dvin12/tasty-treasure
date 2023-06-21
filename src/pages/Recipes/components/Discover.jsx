import { useEffect, useState } from "react";
import DiscoverPicks from "./DiscoverPicks";
import DiscoverPicksPhone from "./DiscoverPicksPhone";
import DiscoverPicksTablet from "./DiscoverPicksTablet";
import DiscoverPicksLaptop from "./DiscoverPicksLaptop";

function Discover({ discover }) {
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
    <section className="xl:mx-8 2xl:mx-60  ">
      <h2 className="px-8 text-center text-3xl font-medium xl:text-left">
        Discover Something New
      </h2>

      {isMobile ? (
        <DiscoverPicksPhone discover={discover}></DiscoverPicksPhone>
      ) : isTablet ? (
        <DiscoverPicksTablet discover={discover}></DiscoverPicksTablet>
      ) : isLaptop ? (
        <DiscoverPicksLaptop discover={discover}></DiscoverPicksLaptop>
      ) : (
        <DiscoverPicks discover={discover}></DiscoverPicks>
      )}
    </section>
  );
}

export default Discover;
