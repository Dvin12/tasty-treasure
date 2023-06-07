import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

/////// TRENDING FETCH ///////////

export async function trendingData() {
  const localStorageData = localStorage.getItem("trendingData");

  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`
    );

    const trending = response.data;

    localStorage.setItem("trendingData", JSON.stringify(trending));

    return trending;
  }
}

////// REVIEWS FETCH /////////

export async function reviewData() {
  const reviews = await axios.get("http://localhost:3001/reviews");
  return reviews;
}

////////// COMBINED ////////////

export async function homeData() {
  const trending = await trendingData();
  const reviews = await reviewData();

  return {
    trending,
    reviews,
  };
}