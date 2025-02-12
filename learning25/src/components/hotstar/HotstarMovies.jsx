import React from "react";
import { Link } from "react-router-dom";

import "./HotstarStyle.css";
export const HotstarMovies = () => {
  return (
    <div class="movies">
      HotstarMovies
      <ul>
        <li>
          <Link to="/play/moneyhiest">Money Hiest</Link>
        </li>
        <li>
          <Link to="/play/strangerthings">Stranger Things</Link>
        </li>
        <li>
          <Link to="/play/dark">Dark</Link>
        </li>
        <li>
          <Link to="/play/breakingbad">Breaking Bad</Link>
        </li>
      </ul>
    </div>
  );
};
