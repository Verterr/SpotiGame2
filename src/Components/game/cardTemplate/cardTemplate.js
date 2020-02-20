import React from "react";

import Player from "../player/player";

const cardTemplate = props => {
    return(
        <div className="cardTemplate">
            <img className="photo" alt="artist" src={props.artistImg}/>
            <h2 className="name">{props.artistName}</h2>
            <p className="genre">{props.artistGenre}</p>
            <Player/>
        </div>
    )
};

export default cardTemplate;