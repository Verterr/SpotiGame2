import React from "react";

import Card from './cardTemplate/cardTemplate';

import './game.css';

const game = props => {

    return(
      <div className="game">
          <div className="card card1"><Card
              artistImg={props.artistImg}
              artistName={props.artistName}
              artistGenre={props.artistGenre}
              trackPrev={props.trackPrev}
          /></div>
          <div className="card card2"><Card
              artistImg={props.artistImg}
              artistName={props.artistName}
              artistGenre={props.artistGenre}
              trackPrev={props.trackPrev}
          /></div>
          <div className="card card3"><Card
              artistImg={props.artistImg}
              artistName={props.artistName}
              artistGenre={props.artistGenre}
              trackPrev={props.trackPrev}
          /></div>
      </div>
    );
};

export default game;