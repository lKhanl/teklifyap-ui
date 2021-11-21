import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/Auth";
import HomeReducer from "./slices/Home";
import ThemeReducer from "./slices/Theme";

const store = configureStore({
    reducer:{auth :AuthReducer.reducer,home:HomeReducer.reducer,theme:ThemeReducer.reducer} 
})

export default store;