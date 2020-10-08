import React from "react";
import './PageLayout.scss'

import Header from "../components/Layout/Header/Header";
import Lokacija from '../components/Layout/Lokacija/Lokacija'
import Footer from '../components/Layout/Footer/Footer'

const PageLayout = (props) => {
  return (
    <div className="PageLayout">
      <Header />
      <main>
        {props.children}
        <Lokacija />
        <Footer/>
      </main>
     
   
    </div>
  );
};

export default PageLayout;
