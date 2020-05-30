import React, {Component} from "react";

import './Card.css';

import Player from "../Player/Player";
import Loader from "../Loader/Loader";
import {Card as CardTemplate, CardHeader, CardContent} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

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

    componentDidUpdate(prevProps) {
        if (this.props.artist.id !== prevProps.artist.id) {
            getArtistTracks(this.props.artist.id)
                .then(res =>{
                    this.setState({tracks: res.tracks, loading: false});
                })
        }
    }

    render() {
        let card = <Loader/>;
        if(!this.state.loading) {
            console.log(this.props.artist.images);
            card = (<div>
                    <CardTemplate className="cardTemplate">
                        <CardHeader className="artistHeader" title={this.props.artist.name} subheader={`Genres: ${this.props.artist.genres.filter((value, i) => i<=3).join(', ')}`}/>
                        <div className="artistPhoto">
                            <img src={this.props.artist.images[1].url} alt={this.props.artist.name}/>
                        </div>
                        <CardContent className="cardPlayers">
                            <Player trackPrev={this.state.tracks[0]} volume={this.props.volume}/>
                            <Player trackPrev={this.state.tracks[1]} volume={this.props.volume}/>
                            <Player trackPrev={this.state.tracks[2]} volume={this.props.volume}/>
                        </CardContent>
                    </CardTemplate>
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