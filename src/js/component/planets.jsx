import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";

export const Planets = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="planeta" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"></p>
          <br />
          <Link style={{marginRight:'100px'}} to={`/single/${props.id}`} href="#" className="btn btn-primary">
            Learn more!
          </Link>
          <button
            style={{ marginLeft: "10px" }}
            className="btn btn-sm btn-outline-secondary"
            type="button"
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

Planets.propTypes = {
  title: PropTypes.string,
};

export default Planets;
