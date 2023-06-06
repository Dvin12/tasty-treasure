import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

/// VEGETARIAN FETCH //////////

export async function vegetarianData() {
  const localStorageData = localStorage.getItem("vegetarianData");

  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=14&tags=vegetarian`
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
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=16`
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
