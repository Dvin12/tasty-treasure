import Header from "../components/Header";

import Trending from "../components/Trending";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [trending, setTrending] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setTrending(data.recipes);
  }, [data]);
  return (
    <main>
      <Header></Header>
      <Trending trending={trending}></Trending>
      <Banner></Banner>
    </main>
  );
}

export default Home;
