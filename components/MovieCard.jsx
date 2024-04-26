const MovieCard = ({ movie }) => {
  return (
    <div key={movie.id} className="bg-white shadow-md rounded-md p-4">
      <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded-md" />
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-500">{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
