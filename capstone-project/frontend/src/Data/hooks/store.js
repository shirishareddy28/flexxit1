import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import userSlice from "./UserSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    user: userSlice.reducer,
  },
});
