import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import starswars from "../../img/logoStarWars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="logo-star-wars"
          src={starswars}
          style={{ marginLeft: "40px", width: "150px" }}
        />
      </Link>

      <div className="btn-group" role="group">
        <button
          style={{ marginRight: "40px", fontSize: "13px" }}
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >favoritos {store.favorites.length > 0 ? store.favorites.length : "0"}</button>
        <ul className="dropdown-menu">
          {store.favorites.map((item, index) => (  //necesitaba parentesis para que me mostrara el item
            <li key={index}>
            {item}
              <a className="dropdown-item" href="#">
                
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
