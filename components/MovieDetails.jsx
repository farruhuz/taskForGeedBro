import { useRouter } from 'next/router';
import { useGetMovieDetailsQuery } from '../api/moviesApi';

const MovieDetails = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data: movieDetails, isFetching } = useGetMovieDetailsQuery(movieId);

  if (isFetching) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img src={movieDetails.image} alt={movieDetails.title} />
      <p>Description: {movieDetails.description}</p>
      <p>Year: {movieDetails.year}</p>
      <p>Country: {movieDetails.country}</p>
      <p>Genre: {movieDetails.genres.join(', ')}</p>
      <p>Duration: {movieDetails.duration} minutes</p>
      <video controls>
        <source src={movieDetails.demo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Employees</h2>
      <div className="employee-images">
        {movieDetails.employees.map((employee) => (
          <img key={employee.id} src={employee.image} alt={employee.name} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
