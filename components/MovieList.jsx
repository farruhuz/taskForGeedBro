"use client"
import { useGetMoviesQuery } from "@/api/moviesApi";
import { useState } from "react";

const MovieList = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(4);
  const { data, isFetching } = useGetMoviesQuery({ page, items });

  if (isFetching) return <div>Loading...</div>;
  console.log(data);

  return (
    <div>
      <h1>Movies List</h1>
      <div className="movie-list">
        {data?.movies?.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList
