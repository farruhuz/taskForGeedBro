"use client"
import { useSelector } from 'react-redux';
import moviesApi from '../../../redux/moviesApi';


const MovieDetails = ({ params }) => {
  const { movie } = useSelector(state => state.movie);
  const { data: movieDetails, isFetching } = moviesApi.useGetMovieDetailsQuery(params.movieId);

  if (isFetching) return <div>Loading...</div>;

  const { image } = movieDetails.data[0];
  console.log(movieDetails.data[0]);

  // return (
  //   <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen flex flex-col justify-center items-center">
  //     <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
  //       <h1 className="text-3xl font-bold text-center mb-4">{movie.title}</h1>
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //         <div className="flex justify-center items-center">
  //           <img src={image} alt={title} className="rounded-lg shadow-lg w-full" />
  //         </div>
  //         <div>
  //           <p className="text-lg text-gray-800 mb-4">{movie.description}</p>
  //           <div className="flex flex-wrap mb-4">
  //             <p className="text-gray-600 mr-4">
  //               <span className="font-semibold">Year:</span> {movie.year}
  //             </p>
  //             <p className="text-gray-600 mr-4">
  //               <span className="font-semibold">Country:</span> {movie?.countries[0]?.title}
  //             </p>
  //             <p className="text-gray-600 mr-4">
  //               <span className="font-semibold">Genre:</span> {movie?.genre?.map((genre) => genre.title).join(', ')}
  //             </p>
  //           </div>
  //           <video controls className="rounded-lg shadow-lg w-full mb-4">
  //             <source src={movie.demoUrl} type="video/mp4" />
  //             Your browser does not support the video tag.
  //           </video>
  //           <div className="flex justify-center items-center">
  //             {/* {movie.employees.map((employee) => (
  //               <div key={employee.id} className="flex flex-col items-center mr-4">
  //                 <img src={employee.imageUrl} alt={employee.name} className="w-24 h-24 rounded-full shadow-lg mb-2" />
  //                 <p className="text-gray-800 font-semibold">{employee.name}</p>
  //                 <p className="text-gray-600">{employee.role}</p>
  //               </div>
  //             ))} */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 px-2 pb-4">
          <img class="rounded-lg shadow-md w-full h-auto" src={image} alt="Movie Poster" />
        </div>
        <div class="w-full md:w-1/2 lg:w-2/3 px-2 pb-4">
          <h2 class="text-2xl font-bold mb-2">Movie Name : {movie.titleEn}</h2>
          <p class="text-gray-700 mb-4">Movie Description</p>
          <div class="flex items-center mb-2">
            <span class="text-gray-700 mr-2">Year:</span>
            <span>{movie.year}</span>  </div>
          <div class="flex items-center mb-2">
            <span class="text-gray-700 mr-2">Country:</span>
            <span>{movie.countries.map(({ title }) => title).join(", ")}</span>  </div>
          <div class="flex items-center mb-2">
            <span class="text-gray-700 mr-2">Genre:</span>
            <span>{movie.genres.map(({ title }) => title).join(", ")}</span>  </div>
        </div>
      </div>
      <div class="mt-8">
        <h3 class="text-lg font-bold mb-2">Demo Player</h3>
        <div class="w-full overflow-hidden rounded-lg shadow-md">
          <video width="100%" height="300" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div class="mt-8 grid grid-cols-2 gap-4">
        <h3 class="text-lg font-bold mb-2 col-span-2">Employees</h3>
        <div class="flex items-center px-2 py-4 rounded-lg shadow-md">
          <img class="w-12 h-12 rounded-full mr-4 object-cover" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Employee 1" />
          <div>
            <p class="text-gray-700">Employee Name 1</p>
            <p class="text-gray-500 text-sm">Role</p>
          </div>
        </div>
        <div class="flex items-center px-2 py-4 rounded-lg shadow-md">
          <img class="w-12 h-12 rounded-full mr-4 object-cover" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Employee 2" />
          <div>
            <p class="text-gray-700">Employee Name 2</p>
            <p class="text-gray-500 text-sm">Role</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MovieDetails;
