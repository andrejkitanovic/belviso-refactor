import React from "react";
import './PageLayout.scss'

import Header from "../components/Layout/Header/Header";

const PageLayout = (props) => {
  return (
    <div className="PageLayout">
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default PageLayout;
