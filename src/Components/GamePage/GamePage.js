import React, {Component} from 'react';
import './GamePage.css';


import TopNavBar from "../topNavBar/topNavBar";
import Game from '../game/game';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyWebApi = new SpotifyWebApi();

class GamePage extends Component {


    state = {
        token: localStorage.getItem('token'),
        loggedIn: false,
        artistId: '1w5Kfo2jwwIPruYS2UWh56',
        artistImg: '',
        artistName: '',
        artistGenre: ''
    };


    componentDidMount() {
        spotifyWebApi.setAccessToken(this.state.token);
        const validToken = localStorage.getItem('expirationDate') > (Date.now());
        if (localStorage.getItem('token') && validToken) {
            this.setState({
                loggedIn: true
            });
        } else {
            this.setState({
                loggedIn: false
            });
            this.props.history.push('/');
        }
        spotifyWebApi.getArtist(this.state.artistId)
            .then(res => {
                this.setState({
                    artistImg: res.images[0],
                    artistName: res.name,
                    artistGenre: res.genres
                })
            })
    }

    render() {
        return (
            <div className="gamePage">
                <TopNavBar loggedIn={this.state.loggedIn}/>
                <Game
                    artistImg={this.state.artistImg}
                    artistName={this.state.artistName}
                    artistGenre={this.state.artistGenre}
                />
            </div>
        )
    }
}

export default GamePage;