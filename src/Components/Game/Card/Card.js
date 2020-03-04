import React from "react";

import './Card.css';

import Player from "../Player/Player";

import {getArtistTracks} from "../../../Containers/Game/gameLogic";

const card = props => {

    let tracks;
    getArtistTracks(props.artist.id).then(res => {
        tracks = res;
    });

    return(
        <div className="cardTemplate">
            <img className="photo" alt="artist" src={props.artist.images[0].url}/>
            <h2 className="artist-name">{props.artist.name}</h2>
            <div className="genres-box">
                <h3 className="genre-name">Genres:</h3>
                <p className="genre">{props.artist.genres.join(', ')}</p>
            </div>
            {/*<Player trackPrev={props.trackPrev[0]}/>*/}
            {/*<Player trackPrev={props.trackPrev[1]}/>*/}
            {/*<Player trackPrev={props.trackPrev[2]}/>*/}
        </div>
    )
};

export default card;