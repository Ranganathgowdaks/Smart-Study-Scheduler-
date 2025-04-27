import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
