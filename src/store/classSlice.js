import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [],
};

const classSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    addClass: (state, action) => {
      state.classes.push(action.payload);
    },
    deleteClass: (state, action) => {
      state.classes = state.classes.filter((cls) => cls.id !== action.payload);
    },
    updateClass: (state, action) => {
      const index = state.classes.findIndex(
        (cls) => cls.id === action.payload.id
      );
      if (index !== -1) {
        state.classes[index] = action.payload;
      }
    },
    markClassDone: (state, action) => {
      const cls = state.classes.find((c) => c.id === action.payload);
      if (cls) cls.done = true;
    },
  },
});

export const { addClass, deleteClass, updateClass, markClassDone } =
  classSlice.actions;
export default classSlice.reducer;
