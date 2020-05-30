import React, {Component} from "react";
import {connect} from 'react-redux';
import {getRelatedArtist} from "../../Containers/Game/gameLogic";
import * as actions from "../../store/actions/gameLogic";
import Loader from "./Loader/Loader";
import CurrentArtistCard from "./CurrentArtistCard/CurrentArtistCard";
import Button from "@material-ui/core/Button";
import {Card, Fab, Slider} from "@material-ui/core";
import ArtistCard from './Card/Card';
import './Game.css';


class Game extends Component {

    state = {
        relatedArtists: '',
        i: 2,
        loading: true,
        currentArtistPageOpen: false,
        volume: 0.1
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

     setCurrentArtistHandler = (id) => {
         this.setState({loading: true});
         this.props.setCurrentArtist(id);
         getRelatedArtist(id)
            .then(res => {
                this.setState({relatedArtists: res.artists, loading: false});
            });
    };

    openCurrentArtistPage = () => {
         this.setState({currentArtistPageOpen: true});
    };

    closeCurrentArtistPage = () => {
        this.setState({currentArtistPageOpen: false})
    };

    componentWillMount() {
        getRelatedArtist(this.props.currentArtist.id)
            .then(res => {
                this.setState({relatedArtists: res.artists, loading: false});
            });
    }

    volumeChange = (event, newValue) => {
        this.setState({
            volume: newValue
        })
    }

    render() {
        let page = <Loader/>;
        if(!this.state.loading) {
            if(this.state.currentArtistPageOpen) {
                page = <CurrentArtistCard closeCurrentArtistPage={() => this.setState({currentArtistPageOpen: false})}/>
            } else {
                page = (
                    <div className="game">
                        <div className="navGame">
                            <Fab className="navButton" variant="extended">
                                Prev card
                            </Fab>
                            <Card className="gameNavMenu">
                                <Button>Artist List</Button>
                                <h2>Step: 10</h2>
                                <Slider id="slider"
                                        aria-labelledby="continuous-slider"
                                        min={0}
                                        max={100}
                                        step={1}
                                        onChange={this.volumeChange}
                                        defaultValue={0.5}
                                />
                            </Card>
                            <Fab className="navButton" variant="extended">
                                Next card
                            </Fab>
                        </div>
                        <div className="cardGrid">
                            <ArtistCard className="artistCard1" artist={this.state.relatedArtists[this.state.i]} volume={this.state.volume}/>
                            <ArtistCard className="artistCard2" artist={this.state.relatedArtists[this.state.i]} volume={this.state.volume}/>
                            <ArtistCard className="artistCard3" artist={this.state.relatedArtists[this.state.i]} volume={this.state.volume}/>
                        </div>
                    </div>)
            }
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