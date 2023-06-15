import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeDetails: [],
  userInfo: null,
};

export const tastySlice = createSlice({
  name: "tasty",
  initialState,
  reducers: {
    addToSaved: (state, action) => {
      const newItem = action.payload;
      const itemExists = state.recipeDetails.some(
        (item) => item.id === newItem.id
      );

      if (!itemExists) {
        state.recipeDetails.push(newItem);
      }
    },
    removeFromSaved: (state, action) => {
      state.recipeDetails = state.recipeDetails.filter(
        (item) => item.id !== action.payload
      );
    },
    resetSaved: (state) => {
      state.recipeDetails = [];
    },
  },
});

export const { addToSaved } = tastySlice.actions;
export default tastySlice.reducer;
