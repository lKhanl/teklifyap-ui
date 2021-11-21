import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: localStorage.getItem("home")
    ? JSON.parse(localStorage.getItem("home"))
    : false,
};

const HomeSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    activeHomepage(state) {
      state.home = true;
      localStorage.setItem("home", JSON.stringify(state.home));
    },
    inActiveHomepage(state) {
      state.home = false;
      localStorage.removeItem("home");
    },
  },
});
export const HomeActions = HomeSlice.actions;
export default HomeSlice;
