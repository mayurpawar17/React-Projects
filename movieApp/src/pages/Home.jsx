import React from "react";
import MovieCard from "../components/MovieCard";
import "../assets/styles/home.css";
import { useState } from "react";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      url: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      release_date: "1994-09-23",
    },
    {
      id: 2,
      title: "The Godfather",
      url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      release_date: "1972-03-24",
    },
    {
      id: 3,
      title: "The Dark Knight",
      url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      release_date: "2008-07-18",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      url: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      release_date: "1994-10-14",
    },
    {
      id: 5,
      title: "Inception",
      url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      release_date: "2010-07-16",
    },
    {
      id: 6,
      title: "Parasite",
      url: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      release_date: "2019-05-21",
    },
    {
      id: 7,
      title: "Spirited Away",
      url: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      release_date: "2001-07-20",
    },
    {
      id: 8,
      title: "Avengers: Endgame",
      url: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      release_date: "2019-04-26",
    },
  ];

const handleSearch=()=>{

}

  return (
    <div className="home-container">

<form onSubmit={handleSearch}>
    <input type="text"  className="serach-inpupt" placeholder="search for movie..."/>
    <button type="submit">search</button>
</form>
      <h1 className="page-title">Featured Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
