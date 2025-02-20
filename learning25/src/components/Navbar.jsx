import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/home">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/movies">
              Movies
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemos">
              Form Demos
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/apidemo1">
              ApiDemo1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/searchmovies">
              SearchMovie
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/apipostdemo1">
              ApiPostDemo1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apipostdemo2">
              ApiPostDemo2
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
