import React, {Component} from "react";
import {connect} from 'react-redux';
import {getRelatedArtist} from "../../Containers/Game/gameLogic";
import * as actions from "../../store/actions/gameLogic";
import Loader from "./Loader/Loader";

import Card from './Card/Card';
import './Game.css';


class Game extends Component {

    state = {
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

    componentWillMount() {
        getRelatedArtist(this.props.currentArtist.id)
            .then(res => {
                this.setState({relatedArtists: res.artists, loading: false});
                console.log(res);
            });
    }

     setCurrentArtistHandler(id) {
         this.setState({loading: true});
         this.props.setCurrentArtist(id);
         getRelatedArtist(id)
            .then(res => {
                this.setState({relatedArtists: res.artists, loading: false});
                console.log(res);
            });
    }

    render() {
        let page = <Loader/>;
        if(!this.state.loading) {
            page = (
                <div className="game">
                    <div className="game-nav">
                        <button onClick={this.prevArtist}>Prev</button>
                        <button>Your Target</button>
                        <button onClick={this.nextArtist}>Next</button>
                    </div>
                    <div className="card card1">
                        <Card artist={this.state.relatedArtists[this.state.i-2]}/>
                        <button className="selectArtistButton"
                                onClick={() => this.setCurrentArtistHandler(this.state.relatedArtists[this.state.i-2].id)}
                        >SELECT</button>
                    </div>
                    <div className="card card2">
                        <Card artist={this.state.relatedArtists[this.state.i-1]}/>
                        <button className="selectArtistButton"
                                onClick={() => this.setCurrentArtistHandler(this.state.relatedArtists[this.state.i-1].id)}
                        >SELECT</button>
                    </div>
                    <div className="card card3">
                        <Card artist={this.state.relatedArtists[this.state.i]}/>
                        <button className="selectArtistButton"
                        onClick={() => this.setCurrentArtistHandler(this.state.relatedArtists[this.state.i].id)}
                        >SELECT</button>
                    </div>
                </div>
            );
        }
        return page;
    }
}

const mapStateToProps = state => {
    return {
        firstArtist: state.firstArtist,
        currentArtist: state.currentArtist,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentArtist: (id) => dispatch(actions.setCurrentArtist(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);