import React from "react";

import Naslov from "../../../components/Universal/Naslov/Naslov";
import AkcijeComponent from "../../../components/Universal/Akcije/Akcije";
import AkcijeData from "../../../data/Akcije.json";

const Akcije = (props) => {
  return (
    <React.Fragment>
      <Naslov text="Akcije" />
      <AkcijeComponent akcije={AkcijeData} />
    </React.Fragment>
  );
};

export default Akcije;
