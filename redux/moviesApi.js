import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "https://vr2.rudi.uz";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ4OTY1MDN9.ZNWMKN-ACvqM-QiElV9Ky6lAa_9gOX3vKWpIEPMn-g4";

const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: { Authorization: API_KEY }
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page = 1, items = 10 }) => `get/movie/list?page=${page}&item=${items}`
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `/get/movie/detail/${movieId}`,
    }),
  }),
});

const { useGetMoviesQuery, useGetMovieDetailsQuery } = moviesApi;
export default moviesApi
