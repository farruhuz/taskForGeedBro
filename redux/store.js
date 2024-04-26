
import { configureStore } from "@reduxjs/toolkit";
import moviesApi from "./moviesApi";
import { movieReducer } from "./movieSlice"

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware)
})
