"use client"
import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import moviesApi from '../redux/moviesApi';


export default function Home() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const { data, isLoading, isError, isFetching } = moviesApi.useGetMoviesQuery({ page });


  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 0.5 >=
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (data) {
      setMovies((prevMovies) => [...prevMovies, ...data.data.movies]);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className='p-4 bg-slate-900'>
      <MovieList movies={movies} />
      {isFetching && <div>Loading more...</div>}
    </div>
  );
}






