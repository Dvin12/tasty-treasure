import axios from "axios";

export async function trendingData() {
  const trending = await axios.get(`
    https://api.spoonacular.com/recipes/random?apiKey=34c605757dc747328d796105792c4ff8&number=9`);
  return trending;
}
