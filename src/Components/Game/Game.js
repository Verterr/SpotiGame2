import React, {Component} from "react";
import {connect} from 'react-redux';
import {getRelatedArtist} from "../../Containers/Game/gameLogic";
import * as actions from "../../store/actions/gameLogic";
import Loader from "./Loader/Loader";

import Card from './Card/Card';
import './Game.css';


class Game extends Component {

    state = {
        currentArtist: this.props.firstArtist,
        relatedArtists: '',
        i: 2,
        loading: true
    };

    nextArtist = () => {
        if(this.state.i < this.state.relatedArtists.length - 2){
            this.setState({i: this.state.i + 1});
        }
    };

    prevArtist = () => {
        if(this.state.i > 2){
            this.setState({i: this.state.i - 1});
        }
    };

    componentDidMount() {
        getRelatedArtist(this.state.currentArtist.id)
            .then(res => {
                this.setState({relatedArtists: res.artists, loading: false});
                console.log(res);
            });
    }

    render() {
        console.log("RENDERED");
        let page = <Loader/>;
        if(!this.state.loading) {
            console.log(this.state.relatedArtists);
            console.log("RENDER LOADING PAGE");
            page = (
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
        return page;
    }
}

const mapStateToProps = state => {
    return {
        firstArtist: state.firstArtist
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadingPauser: () => dispatch(actions.loadingPauser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);