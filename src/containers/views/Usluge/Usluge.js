import React from "react";

import UslugeComponents from "../../../components/Universal/Usluge/Usluge";

import UslugeData from '../../../data/UslugePreview.json'

const Usluge = (props) => {
  return (
    <div className="Usluge">
      <UslugeComponents usluge={UslugeData}/>
    </div>
  );
};

export default Usluge;
