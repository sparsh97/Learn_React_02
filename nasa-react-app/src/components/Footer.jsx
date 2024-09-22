import React from "react";

function Footer(props) {
  const { showModal, handleToggleModel } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>The Brutal Martian Landscape</h2>
        <h1>AOPD PROJECT</h1>
      </div>
      <button onClick={handleToggleModel}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
