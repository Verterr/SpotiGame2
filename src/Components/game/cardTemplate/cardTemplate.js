import React from "react";

import Player from "../player/player";

const cardTemplate = props => {
    return(
        <div className="cardTemplate">
            <img className="photo" alt="artist"/>
            <h2 className="name">Artist Name</h2>
            <p className="genre">Music Genre</p>
            <Player/>
        </div>
    )
};

export default cardTemplate;