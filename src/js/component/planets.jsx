import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";


export const Planets = (props) => {
  
  
  return (
    
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="planeta" />
        <div className="card-body">
          <h5 className="card-title" style={{ display: "flex", justifyContent: "center" }}>{props.title}</h5>
         
          <br />
          <div className="container">
            <div className="row">
              <Link 
                style={{ marginRight: "0px", width: "70%", textDecoration: "none" }}
                to={`/planet/${props.id}`}
                href="#"
                className="buton" >
                <span>Learn more!</span>
              </Link>
              <div 
                className="col"
                style={{ display: "flex", justifyContent: "center"}}
              >
              <button 
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

Planets.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
};

export default Planets;
