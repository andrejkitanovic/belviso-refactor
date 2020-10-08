import React from "react";
import "./App.scss";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PageLayout from "./hoc/PageLayout";

import Pocetna from './containers/views/Pocetna/Pocetna'
import Usluge from './containers/views/Usluge/Usluge'
import Akcije from './containers/views/Akcije/Akcije'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageLayout>
          <Switch>
            <Route path="/" exact component={Pocetna} />
            <Route path="/usluge" component={Usluge} />
            <Route path="/galerija" />
            <Route path="/akcije" component={Akcije}/>
            <Route path="/cenovnik" />
            <Route path="/zakazivanje" />
            <Route path="/posao" />
            <Route path="/kontakt" />
            <Redirect to="/" />
          </Switch>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
