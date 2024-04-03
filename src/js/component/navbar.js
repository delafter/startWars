import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import starswars from "../../img/logoStarWars.png";



export const Navbar = () => {
  const [favorites, setFavorites] = useState([0]);
  useEffect(() => {
    setFavorites(favorites);
  }, [favorites]);

    


  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="logo-star-wars"
          src={starswars}
          style={{ marginLeft: "40px", width: "150px"}}
        />
      </Link>
     

      <div className="btn-group" role="group">
        <button
          style={{ marginRight: "40px", fontSize: "13px"}}
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        > Favourites {favorites}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
             tu favorito
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              tu favorito
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
