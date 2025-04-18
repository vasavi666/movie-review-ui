import React from 'react';

const movie = {
  movieName: "Oppenheimer",
  moviePoster: "/oppenheimer.jpg", 
  movieReleaseYear: { date: "21 July", year: 2023 },
  rating: 4
};

const MovieCard = () => {
  return (
    <div style={{marginLeft:"650px", marginTop:"170px"}}> 
      <img 
        src="https://m.media-amazon.com/images/I/81218n6JFgL.jpg" 
        alt={movie.movieName} 
        style={{ width: "200px" }}
              />
       <div>{movie.movieName}</div>
      <div>Release: {movie.movieReleaseYear.date} {movie.movieReleaseYear.year}</div>
      <div>Rating: {movie.rating}</div>     
    </div>
     
  );
};

export default MovieCard;
