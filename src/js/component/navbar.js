import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import starswars from "../../img/pegatina-star-wars-logo.png";



export const Navbar = () => {

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          className="logo-star-wars"
          src={starswars}
          style={{ marginLeft: "40px" }}
        />
      </Link>
	

      <div className="btn-group" role="group">
        <button
          style={{ marginRight: "40px" }}
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        > Favoutites
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Dropdown link
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Dropdown link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
