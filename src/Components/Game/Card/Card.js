import React, {Component} from "react";

import './Card.css';

import Player from "../Player/Player";
import Loader from "../Loader/Loader";

import {getArtistTracks} from "../../../Containers/Game/gameLogic";

class Card extends Component {

    state = {
      tracks: '',
      loading: true
    };

    componentDidMount() {
        getArtistTracks(this.props.artist.id)
            .then(res =>{
                this.setState({tracks: res.tracks, loading: false});
            })
    }

    render() {
        let card = <Loader/>;
        if(!this.state.loading) {
            card = (<div>
                        <img className="photo" alt="artist" src={this.props.artist.images[0].url}/>
                        <h2 className="artist-name">{this.props.artist.name}</h2>
                        <div className="genres-box">
                            <h3 className="genre-name">Genres:</h3>
                            <p className="genre">{this.props.artist.genres.join(', ')}</p>
                        </div>
                            <Player trackPrev={this.state.tracks[0]}/>
                            <Player trackPrev={this.state.tracks[1]}/>
                            <Player trackPrev={this.state.tracks[2]}/>
                    </div>)
        }
        return(
            <div className="cardTemplate">
                {card}
            </div>
        )
    }
};

export default Card;