import { useEffect, useState } from "react";
import DiscoverPicks from "./DiscoverPicks";
import DiscoverPicksPhone from "./DiscoverPicksPhone";

function Discover({ discover }) {
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
    <section className="xl:mx-60  ">
      <h2 className="px-8 text-center text-3xl font-medium xl:text-left">
        Discover Something New
      </h2>

      {isMobile ? (
        <DiscoverPicksPhone discover={discover}></DiscoverPicksPhone>
      ) : (
        <DiscoverPicks discover={discover}></DiscoverPicks>
      )}
    </section>
  );
}

export default Discover;
