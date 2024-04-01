import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";

export const Characters = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="personaje" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <br />
        <Link to={`/single/${props.id}`} style={{marginRight:'100px'}}  href="#" className="btn btn-primary">
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
  );
};

Characters.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
};

export default Characters;
