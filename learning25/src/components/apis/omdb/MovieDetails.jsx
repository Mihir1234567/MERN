import React, { useEffect, useState } from "react";
import "../Api.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const MovieDetails = () => {
  const id = useParams().id;
  const [movie, setmovie] = useState("");
  const [Ratings, setRatings] = useState([]);
  const getDetails = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=52e3de43&i=${id}`
    );
    console.log(res.data);
    setmovie(res.data);
    setRatings(res.data.Ratings);
  };
  useEffect(() => {
    getDetails();
  }, []);
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
      <h1 className="text-warning text-center fw-bold">🎥 Movie Details</h1>
      {/* {!movie && (
        <button
          className="btn btn-warning mb-3 d-block mx-auto fw-bold"
          onClick={getDetails}
        >
          Get Movie Details{" "}
        </button>
      )} */}
      {movie && (
        <div className="card bg-dark text-light shadow-lg p-4 border-warning">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={movie.Poster}
                alt="Movie Poster"
                className="img-fluid rounded"
                style={{ maxHeight: "450px" }}
              />
            </div>

            <div className="col-md-8">
              <h2 className="text-warning fw-bold">
                {movie.Title} ({movie.Year})
              </h2>
              <p>
                <strong>🎬 Directed by:</strong> {movie.Director}
              </p>
              <p>
                <strong>✍ Written by:</strong> {movie.Writer}
              </p>
              <p>
                <strong>🎭 Actors:</strong> {movie.Actors}
              </p>
              <p>
                <strong>🎞 Genre:</strong> {movie.Genre}
              </p>
              <p>
                <strong>🌍 Language:</strong> {movie.Language}
              </p>
              <p>
                <strong>🌎 Country:</strong> {movie.Country}
              </p>
              <p>
                <strong>📅 Release Date:</strong> {movie.Released}
              </p>
              <p>
                <strong>⌛ Runtime:</strong> {movie.Runtime}
              </p>
              <p>
                <strong>🎟 Box Office:</strong> {movie.BoxOffice}
              </p>
              <p>
                <strong>🏆 Awards:</strong> {movie.Awards}
              </p>
              <p>
                <strong>🔞 Rated:</strong> {movie.Rated}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-warning fw-bold">📖 Plot</h4>
            <p>{movie.Plot}</p>
          </div>

          <div className="mt-4">
            <h4 className="text-warning fw-bold">⭐ Ratings</h4>
            <ul className="list-group">
              {Ratings.map((rating) => (
                <li className="list-group-item bg-dark text-light border-warning">
                  <strong>{rating.Source}:</strong> {rating.Value}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-warning fw-bold">🔎 Additional Information</h4>
            <p>
              <strong>⭐ IMDb Rating:</strong> {movie.imdbRating}
            </p>
            <p>
              <strong>📊 IMDb Votes:</strong> {movie.imdbVotes}
            </p>
            <p>
              <strong>🎖 Metascore:</strong> {movie.Metascore}
            </p>
            <p>
              <strong>📀 DVD Release:</strong>{" "}
              {movie.DVD !== "N/A" ? "Available" : "Not Available"}
            </p>
            <p>
              <strong>🏭 Production:</strong>{" "}
              {movie.Production !== "N/A" ? movie.Production : "Not Available"}
            </p>
            <p>
              <strong>🌐 Official Website:</strong>{" "}
              {movie.Website !== "N/A" ? movie.Website : "Not Available"}
            </p>
          </div>

          {/* Watchlist Button */}
          <button className="btn btn-outline-warning w-100 fw-bold mt-3">
            ⭐ Add to Watchlist
          </button>
        </div>
      )}
      <div className="text-center mt-3">
        <Link
          to="/searchmovies"
          className="btn btn-outline-warning fw-bold px-4 py-2"
        >
          🔙 Go to Previous Page
        </Link>
      </div>
    </div>
  );
};
