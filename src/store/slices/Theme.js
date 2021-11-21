import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : false,
};

const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = !(state.theme);
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
    
  },
});
export const ThemeActions = ThemeSlice.actions;
export default ThemeSlice;
