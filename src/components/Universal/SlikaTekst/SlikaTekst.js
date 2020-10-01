import React from "react";
import "./SlikaTekst.scss";

import {Link} from 'react-router-dom'

const slikaTekst = (props) => {
  return (
    <div className="SlikaTekst">
      <h3>{props.naslov}</h3>
      <h4>{props.tekst}</h4>
      {props.dugme ? <Link to="/zakazivanje">{props.dugme}</Link> : null}
    </div>
  );
};

export default slikaTekst;
