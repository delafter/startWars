import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCaracteristicas(id);
  }, []);

  console.log(store);
  return (
    <div className="container">
      <h4 className="text-center mt-5">{store.personaje.name}</h4>

      <div className="card mb-3" style={{ maxwidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt="mi padre..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p>
                <strong>Birthyear:</strong> {store.personaje.birth_year}{" "}
              </p>
              <p>
                {" "}
                <strong>Eye color:</strong> {store.personaje.eye_color}{" "}
              </p>
              <p>
                {" "}
                <strong>Hair color:</strong> {store.personaje.hair_color}{" "}
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
