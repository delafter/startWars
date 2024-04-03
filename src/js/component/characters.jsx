import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const Characters = (props) => {
  /* const { store, actions } = useContext(Context); */


 
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="personaje" />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {props.title}
        </h5>
        <br />
        <div className="container">
          <div className="row">
            <Link
              to={`/single/${props.id}`}
              style={{ marginRight: "0px", width: "70%", textDecoration: "none" }}
              href="#"
              className="buton"
            >
              <span>Learn more!</span>
            </Link>
            <div
              className="col"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button 
               /*  onClick={actions.createFavorite(props.title)} */
                style={{ marginLeft: "10px", width: "200%" }}
                className="btn btn-sm btn-outline-secondary"
                type="button"
              >
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Characters.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
};

export default Characters;
