import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">

    <h1><img className = "logo" alt = "Overwatch Logo a Property of Blizzard Entertainment" src='./assets/images/Spray_-_Logo.png'/> Overclick</h1>
    <h2>
      Click on an image to earn points, but don't click on any more than once!
    </h2>
  </header>
);

export default Header;
