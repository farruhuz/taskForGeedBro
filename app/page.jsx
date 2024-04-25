"use client"
import MovieList from "@/components/MovieList";
import { useGetMoviesQuery } from "@/api/moviesApi";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(4);
  const { data, isFetching } = useGetMoviesQuery({ page, items });

  if (isFetching) return <div>Loading...</div>;
  console.log(data);

  return (
    <div>
      <h1>Movies List</h1>
      <MovieList />
    </div>
  );
}
