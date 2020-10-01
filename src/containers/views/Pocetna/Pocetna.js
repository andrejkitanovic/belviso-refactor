import React from "react";
import "./Pocetna.scss";

import { Link } from "react-router-dom";

import Swiper from '../../../components/Pocetna/Swiper/Swiper'

const Pocetna = (props) => {
  return (
    <div className="Pocetna">
      <div className="header">
        <h1>Kozmeticki salon belviso</h1>
        <h2>
          Belviso je ekskluzivni centar lepote na atraktivnoj lokaciji u Nišu
          koji donosi novi koncept SPA uživanja i nege.
        </h2>
        <div className="buttons">
          <Link to="/zakazivanje">Zakazi tretman</Link>
          <Link to="/usluge">Nase usluge</Link>
        </div>
      </div>
      <div className="proizvodi">
        <Swiper />
      </div>
    </div>
  );
};

export default Pocetna;
