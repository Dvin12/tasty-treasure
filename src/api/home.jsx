import axios from "axios";


/////// TRENDING FETCH ///////////

export async function trendingData() {
  const localStorageData = localStorage.getItem("trendingData");

  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=c035a78b9bc840dab01f2c6dc6c3d6a5&number=6`
    );

    const trending = response.data;

    localStorage.setItem("trendingData", JSON.stringify(trending));

    return trending;
  }
}

////// REVIEWS FETCH /////////

export async function reviewData() {
  const reviews = await axios.get(
    "https://my-json-server.typicode.com/dvin12/tasty-treasure/reviews"
  );
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
