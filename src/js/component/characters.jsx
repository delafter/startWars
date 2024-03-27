import React from "react";
import { Link } from "react-router-dom";

export const Characters = () => {
  return (
    <div>
      <h1>Characters</h1>
      <div className="card" style={{ width: "18rem" }}>
        <img src="" className="card-img-top" alt="personaje" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/demo" href="#" className="btn btn-primary" >
            Learn more!
          </Link>

          <button className="btn btn-sm btn-outline-secondary" type="button">
            like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Characters;
