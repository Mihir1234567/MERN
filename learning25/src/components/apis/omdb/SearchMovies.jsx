import React, { useState } from "react";
import "../Api.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const SearchMovies = () => {
  const [movieData, setmovieData] = useState([]);
  const [movieName, setmovieName] = useState("");
  const getMovieData = async () => {
    const res = await axios.get(
      // "http://www.omdbapi.com/?apikey=52e3de43&s=avatar"
      `http://www.omdbapi.com/?apikey=52e3de43&s=${movieName}`
    );
    console.log(res.data.Search);
    setmovieData(res.data.Search);
  };
  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
        padding: "20px",
        color: "#ffffff",
      }}
    >
      <h1 className="text-center text-warning fw-bold">🎬 Movie Search</h1>{" "}
      <div className="input-group mb-4 w-50 mx-auto">
        <input
          type="text"
          className="form-control bg-dark text-white"
          placeholder="Search for a movie..."
          onChange={(e) => setmovieName(e.target.value)}
          style={{ border: "2px solid #FFD700" }}
        />
        <button className="btn btn-warning fw-bold" onClick={getMovieData}>
          🔍 Search
        </button>
      </div>
      <div className="container mt-4">
        <div className="row">
          {movieData.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.imdbID}>
              <div className="card bg-dark text-white shadow-lg border-warning h-100">
                <Link
                  to={`/moviedetails/${movie.imdbID}`}
                  className="text-decoration-none"
                >
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/300x450?text=No+Image"
                    }
                    className="card-img-top"
                    alt={movie.Title}
                    style={{
                      height: "400px",
                      objectFit: "cover",
                      transition: "0.3s ease-in-out",
                    }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title text-warning fw-bold">
                    {movie.Title} ({movie.Year})
                  </h5>
                  <p className="text-muted">{movie.Type.toUpperCase()}</p>
                  <Link
                    to={`/moviedetails/${movie.imdbID}`}
                    className="btn btn-outline-warning btn-sm"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
