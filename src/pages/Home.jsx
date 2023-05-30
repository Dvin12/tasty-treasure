import Header from "../components/Header";

import Trending from "../components/Trending";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [trendingItems, setTrendingItems] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setTrendingItems(data.data);
  }, [data]);

  return (
    <main>
      <Header></Header>
      <Trending trendingItems={trendingItems}></Trending>
      <Banner></Banner>
    </main>
  );
}

export default Home;
