

import { configureStore } from "@reduxjs/toolkit";
import PlaylistReducer from "./PlaylistSlice.js";
import likedReducer from "./LikedSlice.js";

export const store = configureStore({
    reducer: {
        playlist: PlaylistReducer ,
        liked:likedReducer// ✅ Correctly setting up the reducer
    }
});