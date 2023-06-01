import axios from "axios";

export async function trendingData() {
  const apiKey = import.meta.env.VITE_API_KEY;
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

export async function reviewData() {
  const reviews = await axios.get("http://localhost:3001/reviews");
  return reviews;
}

export async function combinedData() {
  const trending = await trendingData();
  const reviews = await reviewData();

  return {
    trending,
    reviews,
  };
}
