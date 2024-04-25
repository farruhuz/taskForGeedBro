import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "http://vr.rudi.uz";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQzMjI3MDh9.0CPXVCCK3XiYDlv7vQiOEmfMSTj3VqJpBIBCPp-GDsg";

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers: { Authorization: API_KEY } }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (page = 1, items = 4) => `get/movie/list?page=${page}&item=${items}`
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `/get/movie/detail/${movieId}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieDetailsQuery } = moviesApi;

const movieSlice = createSlice({
  name: 'movies',
  initialState: { movies: [], currentPage: 1, isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(moviesApi.endpoints.getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(moviesApi.endpoints.getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = [...state.movies, ...action.payload.data.movies];
        state.currentPage = action.payload.data.currentPage;
      })
      .addMatcher(moviesApi.endpoints.getMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default movieSlice.reducer;
