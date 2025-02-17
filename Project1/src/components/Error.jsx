import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

export const Error = () => {
  return (
    <div class="container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">
        <button class="btn btn-primary btn-block">Back to Home</button>
      </Link>
    </div>
  );
};
