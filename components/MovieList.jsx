"use client"
import MovieCard from './MovieCard';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
import { movieActions } from '../redux/movieSlice';

const MoviesList = ({ movies }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onGetMovieHandler = (movie) => {
    dispatch(movieActions.getMovie(movie))
    router.push(`/movies/${movie.id}`)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <div onClick={() => onGetMovieHandler(movie)} key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;

