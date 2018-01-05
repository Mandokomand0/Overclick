import React from "react";
import "./HeroButton.css";

const HeroButton = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    alt ={()=> props.name}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`hero-button${props.shake ? " shake" : ""}`}
  />
);

export default HeroButton;
