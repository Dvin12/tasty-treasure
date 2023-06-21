import axios from "axios";

/// VEGETARIAN FETCH //////////

export async function vegetarianData() {
  const localStorageData = localStorage.getItem("vegetarianData");

  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=c035a78b9bc840dab01f2c6dc6c3d6a5&number=14&tags=vegetarian`
    );

    const vegetarian = response.data;

    localStorage.setItem("vegetarianData", JSON.stringify(vegetarian));

    return vegetarian;
  }
}

//// DISCOVER FETCH ///////////

export async function discoverData() {
  const localStorageData = localStorage.getItem("discoverData");

  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=c035a78b9bc840dab01f2c6dc6c3d6a5&number=16`
    );

    const discover = response.data;

    localStorage.setItem("discoverData", JSON.stringify(discover));

    return discover;
  }
}

////// COMBINED /////////////

export async function picksData() {
  const vegetarian = await vegetarianData();
  const discover = await discoverData();

  return {
    vegetarian,
    discover,
  };
}
