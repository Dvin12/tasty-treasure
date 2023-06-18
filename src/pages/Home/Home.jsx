import Header from "./components/Header";

import Trending from "./components/Trending";
import Banner from "./components/Banner";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Reviews from "./components/Reviews";

function Home() {
  const [trending, setTrending] = useState([]);
  const [reviews, setReviews] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    setTrending(data.trending.recipes);
    setReviews(data.reviews.data);
  }, [data]);

  return (
    <main>
      <Header></Header>
      <Trending trending={trending}></Trending>
      <Banner></Banner>
      <Reviews reviews={reviews}></Reviews>
    </main>
  );
}

export default Home;
