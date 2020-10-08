import React from "react";
import "./Akcije.scss";

import Slika from '../../../assets/images/Pocetna/Akcija.png'

const akcije = (props) => {
  const akcije = props.akcije.map((akcija, index) => (
    <div key={index} className="Akcija">
      <div className="image">
          <img src={Slika} alt={akcija.naslov}/>
      </div>
      <div className="description">
        <h4>{akcija.naslov}</h4>
        <span>{akcija.popust}</span>
        <p>{akcija.opis}</p>
      </div>
    </div>
  ));

  return (
    <div className="Akcije">
      <div className="container">{akcije}</div>
    </div>
  );
};

export default akcije;
