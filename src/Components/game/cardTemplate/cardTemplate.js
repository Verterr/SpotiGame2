import React from "react";

import './cardTemplate.css';

import Player from "../player/player";

const cardTemplate = props => {
    return(
        <div className="cardTemplate">
            <img className="photo" alt="artist" src={props.artistImg}/>
            <h2 className="name">{props.artistName}</h2>
            <p className="genre">{props.artistGenre.toString()}</p>
            <Player trackPrev={props.trackPrev}/>
        </div>
    )
};

export default cardTemplate;