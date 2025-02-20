import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormDemos.css"; // Create this new CSS file

export const FormDemos = () => {
  return (
    <div className="form-demos-container">
      <div className="custom-card">
        <div className="card-header-custom">
          <h2 className="card-title">Form Demonstrations</h2>
        </div>
        <div className="card-body-custom">
          <ul className="demo-list">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <li key={num} className="demo-item">
                <Link to={`/FormDemo${num}`} className="demo-link">
                  <span>FormDemo{num}</span>
                    <i className="fas fa-arrow-right"></i>
                </Link>
              </li>
            ))}
            {[1, 2, 3, 4].map((num) => (
              <li key={`hw${num}`} className="demo-item homework">
                <Link to={`/FormDemo${num}hw`} className="demo-link">
                  <span>FormDemo{num}hw</span>
                  <i className="fas fa-pencil-alt"></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
