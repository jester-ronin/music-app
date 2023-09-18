import { configureStore, combineReducers } from "@reduxjs/toolkit";
import somgReducer from "./songReducer";

const rootReducer = combineReducers({
  songs: somgReducer,
});

const store = configureStore({
    reducer: rootReducer, 
  });

export default store