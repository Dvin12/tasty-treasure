import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

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

export async function vegetarianData() {
  const localStorageData = localStorage.getItem("vegetarianData");

  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12&tags=vegetarian`
    );

    const vegetarian = response.data;

    localStorage.setItem("vegetarianData", JSON.stringify(vegetarian));

    return vegetarian;
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
