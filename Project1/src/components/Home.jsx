import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My App</h1>
      <div className="button-container">
        <Link to="/signup">
          <button className="btn btn-primary btn-block">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-primary btn-block">Login</button>
        </Link>
      </div>
    </div>
  );
};
