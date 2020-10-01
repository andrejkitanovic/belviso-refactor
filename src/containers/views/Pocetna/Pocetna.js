import React from "react";
import "./Pocetna.scss";

import { Link } from "react-router-dom";

import Swiper from '../../../components/Pocetna/Swiper/Swiper'
import Usluge from '../../../components/Universal/Usluge/Usluge'
import SlikaTekst from '../../../components/Universal/SlikaTekst/SlikaTekst'
import Akcije from '../../../components/Universal/Akcije/Akcije'

import UslugePreviewData from '../../../data/UslugePreview.json'
import AkcijeData from '../../../data/Akcije.json'

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

      <SlikaTekst naslov="Budite u trendu, budite Belviso..." tekst="Negujte svoju kožu lica i tela, rešite se estetskih nesavršenosti, dođite po savet i preporuku kućne nege."/>
      <Usluge usluge={UslugePreviewData} />
      <SlikaTekst naslov="Zakazite vas termin" dugme="Zakazivanje"/>
      <Akcije akcije={AkcijeData} />
    </div>
  );
};

export default Pocetna;
