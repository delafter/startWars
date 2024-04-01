import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
		<h4 className="text-center mt-5">
		  pagina donde aparecen los personajes individialmente
		</h4>
  
		<div className="card mb-3" style={{ maxwidth: "540px" }}>
		  <div className="row g-0">
			<div className="col-md-4">
			  <img src="..." className="img-fluid rounded-start" alt="..." />
			</div>
			<div className="col-md-8">
			  <div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
				  This is a wider card with supporting text below as a natural
				  lead-in to additional content. This content is a little bit
				  longer.
				</p>
				<p className="card-text">
				  <small className="text-body-secondary">
					Last updated 3 mins ago
				  </small>
				</p>
			  </div>
			</div>
		  </div>
		</div>
		<Link to="/">
		  <button className="btn btn-primary">Back home</button>
		</Link>
	  </div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
