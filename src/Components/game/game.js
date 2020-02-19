import React from "react";

import Card from './cardTemplate/cardTemplate';

import './game.css';

const game = props => {
    return(
      <div className="game">
          <div className="card card1"><Card/></div>
          <div className="card card2"><Card/></div>
          <div className="card card3"><Card/></div>
      </div>
    );
};

export default game;