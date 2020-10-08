import React from "react";

import Naslov from '../../../components/Universal/Naslov/Naslov'
import UslugeComponents from "../../../components/Universal/Usluge/Usluge";

import UslugeData from '../../../data/UslugePreview.json'

const Usluge = (props) => {
  return (
    <React.Fragment>
        <Naslov text="Usluge" />
      <UslugeComponents usluge={UslugeData}/>
      </React.Fragment>
  );
};

export default Usluge;
