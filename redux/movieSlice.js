import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movie: []
  },
  reducers: {
    getMovie: (state, action) => {
      console.log(action.payload);
      state.movie = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
