import React, {Component} from "react";
import {connect} from 'react-redux';

import Card from './Card/Card';
import './Game.css';

import {loadingPauser} from "../../store/actions/gameLogic";

class Game extends Component {

    state = {
        currentArtist: this.props.firstArtist,
        relatedArtists: this.props.relatedArtists.artists
    };

    nextArtist = () => {

    };

    prevArtist = () => {

    };

    render() {
        console.log("RENDERED");
        console.log(this.state.relatedArtists);
        return(
            <div className="game">
                <div className="game-nav">
                    <button>Prev</button>
                    <button>Your Target</button>
                    <button>Next</button>
                </div>
                <div className="card card1"><Card
                    artist={this.state.relatedArtists[0]}
                /></div>
                <div className="card card2"><Card
                    artist={this.state.relatedArtists[1]}
                /></div>
                <div className="card card3"><Card
                    artist={this.state.relatedArtists[2]}
                /></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        firstArtist: state.firstArtist,
        relatedArtists: state.relatedArtists
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);