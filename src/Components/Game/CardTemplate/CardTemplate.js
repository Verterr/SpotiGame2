import React from "react";

import './CardTemplate.css';

import Player from "../Player/Player";

const cardTemplate = props => {
    return(
        <div className="cardTemplate">
            <img className="photo" alt="artist" src={props.artistImg}/>
            <h2 className="artist-name">{props.artistName}</h2>
            <div className="genres-box">
                <h3 className="genre-name">Genres:</h3>
                <p className="genre">{props.artistGenre.join(', ')}</p>
            </div>
            <Player trackPrev={props.trackPrev[0]}/>
            <Player trackPrev={props.trackPrev[1]}/>
            <Player trackPrev={props.trackPrev[2]}/>
        </div>
    )
};

export default cardTemplate;