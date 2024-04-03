import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import starswars from "../../img/logoStarWars.png";
import { Context } from "../store/appContext";
import { MdDeleteOutline } from "react-icons/md";
import "../../styles/index.css";

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
        >
          favoritos {store.favorites.length > 0 ? store.favorites.length : "0"}
        </button>
        <ul className="dropdown-menu">
          {store.favorites.length > 0 ? (
            store.favorites.map((item, index) => (    //necesitaba ser un parentesis y no un corchete para que no me diera error
              <li key={index}>
                <div style={{ display: "flex" }}>
                  <span className="favorites" style={{ width: "90px" }}>
                    {item}
                  </span>
                  <a className="dropdown-item" href="#">
                    <button
                      style={{ border: "none" }}
                      onClick={(event) => {
                        event.stopPropagation();
                        actions.deleteFavorite(item);
                      }}
                      className="btn btn-sm btn-outline-secondary"
                      type="button"
                    >
                      <MdDeleteOutline style={{ fontSize: "20px"}} />
                    </button>
                  </a>
                </div>
              </li>
            ))
          ) : (
            <li>No hay favoritos</li>
          )}
        </ul>
      </div>
    </nav>
  );
};