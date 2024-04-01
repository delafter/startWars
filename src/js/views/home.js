import React, { useState, useContext, useEffect } from "react";
import "../../styles/home.css";
import Characters from "../component/characters.jsx";
import Planets from "../component/planets.jsx";
import { Context } from "../store/appContext";
import imagenes from "../component/imagenpersonajes.jsx";
import imagenesPlanets from "../component/imagenplanetas.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPersonajes();
    actions.getPlanetas();
  }, []);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Characters</h1>
      <br />
      <div className="container">
        <div className="row">
          {store.personajes.map((item, index) => (
            <div
              key={index}
              className="col-md-4"
              style={{ marginBottom: "20px" }}
            >
              <Characters
                title={item.name}
                image={imagenes[index % imagenes.length]} // el % es para que no se pase del tamaño del array
                id={item.uid}
              />
            </div>
          ))}
        </div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Planets</h1>
        <br />
        <div className="row">
          {store.planetas.map((item, index) => (
            <div
              key={index}
              className="col-md-4"
              style={{ marginBottom: "20px" }}
            >
              <Planets
                title={item.name}
                image={imagenesPlanets[index % imagenesPlanets.length]}
                id={item.uid}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
