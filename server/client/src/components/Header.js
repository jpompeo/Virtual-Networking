import React from "react";
import muzeLogo from "../assets/muze-logo.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <div id="header">
      <img id="muze" src={muzeLogo} alt="Muze Logo" />
      <div id="user-info">
        <div id="user-words">
          <p id="user-name">Ann Schnabel</p>
          <p id="user-byline">Graduating Student</p>
        </div>
        <div id="user-circle">
          <p>A</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
