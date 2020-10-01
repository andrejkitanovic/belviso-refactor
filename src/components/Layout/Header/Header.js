import React from "react";
import "./Header.scss";

import {FaFacebookF,FaInstagram} from 'react-icons/fa'
import {MdMail,MdPhone} from 'react-icons/md'

import Navigation from "../Navigation/Navigation";

const header = (props) => {
  return (
    <header>
        <div className="logo">
            <p>Belviso</p>
            <span>Tamo gde lepota nije prolazna</span>
        </div>
      <Navigation />
      <div className="image">
          <a href="https://www.facebook.com/belvisonis/" className="facebook"><FaFacebookF /></a>
          <a href="https://www.facebook.com/belvisonis/" className="instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com/belvisonis/" className="mail"><MdMail /></a>
          <a href="https://www.facebook.com/belvisonis/" className="phone"><MdPhone /></a>
      </div>
    </header>
  );
};

export default header;
