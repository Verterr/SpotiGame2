import React from "react";

import Card from './cardTemplate/cardTemplate';

import './game.css';

const game = props => {

    return(
      <div className="game">
          <div className="card card1"><Card
              photo={props.artistImg}
              artistName={props.artistName}
              genere={props.artistGenre}
          /></div>
          <div className="card card2"><Card
              photo={props.photo}
              artistName={props.artistName}
              genere={props.artistGenre}
          /></div>
          <div className="card card3"><Card
              photo={props.photo}
              artistName={props.artistName}
              genere={props.artistGenre}
          /></div>
      </div>
    );
};

export default game;