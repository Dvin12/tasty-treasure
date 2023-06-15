import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeDetails: [],
  userInfo: null,
};

export const tastySlice = createSlice({
  name: "tasty",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const newItem = action.payload;
      const itemExists = state.recipeDetails.some(
        (item) => item.id === newItem.id
      );

      if (!itemExists) {
        state.recipeDetails.push(newItem);
      }
    },
  },
});

export const { addToFavourites } = tastySlice.actions;
export default tastySlice.reducer;
