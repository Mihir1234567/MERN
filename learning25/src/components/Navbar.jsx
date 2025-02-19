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
            <Link class="nav-link" to="/FormDemo1">
              FormDemo1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/FormDemo2">
              FormDemo2
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/FormDemo3">
              FormDemo3
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/FormDemo4">
              FormDemo4
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/FormDemo5">
              FormDemo5
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/FormDemo6">
              FormDemo6
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/FormDemo1hw">
              FormDemo1hw
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/FormDemo2hw">
              FormDemo2hw
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/FormDemo3hw">
              FormDemo3hw
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/FormDemo4hw">
              FormDemo4hw
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
        </ul>
      </div>
    </nav>
  );
};
