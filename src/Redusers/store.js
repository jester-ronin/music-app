import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songReducer from "./songReducer";
import playlistReducer from "./playlistReduser";

const rootReducer = combineReducers({
  songs: songReducer,
  playlists: playlistReducer
});

const store = configureStore({
    reducer: rootReducer, 
  });

export default store