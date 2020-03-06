import React, {Component} from "react";
import {connect} from 'react-redux';

import Card from './Card/Card';
import './Game.css';

import {loadingPauser} from "../../store/actions/gameLogic";

class Game extends Component {

    state = {
        currentArtist: this.props.firstArtist,
        relatedArtists: this.props.relatedArtists.artists,
        i: 2
    };

    nextArtist = () => {
        this.setState({i: this.state.i + 1});
    };

    prevArtist = () => {
        this.setState({i: this.state.i - 1});
    };

    render() {
        console.log("RENDERED");
        console.log(this.state.relatedArtists);
        return(
            <div className="game">
                <div className="game-nav">
                    <button onClick={this.prevArtist}>Prev</button>
                    <button>Your Target</button>
                    <button onClick={this.nextArtist}>Next</button>
                </div>
                <div className="card card1"><Card
                    artist={this.state.relatedArtists[this.state.i-2]}
                /></div>
                <div className="card card2"><Card
                    artist={this.state.relatedArtists[this.state.i-1]}
                /></div>
                <div className="card card3"><Card
                    artist={this.state.relatedArtists[this.state.i]}
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