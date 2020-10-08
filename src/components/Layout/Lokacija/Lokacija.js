import React from "react";
import "./Lokacija.scss";

const lokacija = (props) => {
  return (
    <div className="Lokacija">
      <div className="slika">
        <h3>Nadjite nas:</h3>
        <p>Adresa: Karadžićeva 2, Niš</p>
        <p>Broj telefona: +38163265266</p>
        <h3>Radno vreme:</h3>
        <p>Ponedeljak - Petak 09:00 - 21:00</p>
        <p>Subota - Petak 09:00 - 18:00</p>
      </div>
      <div className="mapa">
          <div className="overlay"/>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11611.014542369805!2d21.8957873!3d43.3194165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8391eb93cf73ea5!2sBelviso!5e0!3m2!1sen!2srs!4v1602197688048!5m2!1sen!2srs"
            title="Mapa Belviso"
       ></iframe>
      </div>
    </div>
  );
};

export default lokacija;
