import React, {Component} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './MainPage.css';
import {loginURL} from "../../Containers/Auth/auth";

import {Button} from "@material-ui/core";
import TopNavBar from '../TopNavBar/TopNavBar';
import {connect} from 'react-redux';
import * as actions from "../../store/actions/gameLogic";

const spotifyWebApi = new SpotifyWebApi();

class MainPage extends Component {

    constructor(props){
        super(props);
        const params = this.getHashParams();
        let token = params.access_token;
        if (token) {
            spotifyWebApi.setAccessToken(token);
            localStorage.setItem('token', token);
            const expirationDate = Date.now() + 3_600_000;
            localStorage.setItem('expirationDate', expirationDate);
            token = null;
        }
        this.state = {
            token: token ? true : false,
            loggedIn: false,
        };
    }

    componentDidMount() {
        const validToken = localStorage.getItem('expirationDate') > (Date.now());
        if (localStorage.getItem('token') && validToken) {
            this.setState({
                loggedIn: true
            });
        } else {
            this.setState({
                loggedIn: false
            })
        }
    }

    playGameHandler = () => {
        this.props.renderGame();
        this.props.history.push('/game');
    };

    getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g, q = window.location.hash.substring(1);
        e = r.exec(q)

        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }

        return hashParams;
    };

    mainButtonHandler = () => {
        if(this.state.loggedIn) {
            this.props.renderGame();
            this.props.history.push('/game');
        } else {
            window.location.href = loginURL;
        }
    }

    render() {
        return (
            <div className="MainPage">
                <video className="VideoBG" autoPlay={true} loop={true}>
                    <source src={require("../../Assets/Video/videoBG.mp4")} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="center-container">
                    <h1>SpotiGame</h1>
                    <Button onClick={this.mainButtonHandler}>
                        {this.state.loggedIn ? "Start Game" : "Login with Spotify"}
                    </Button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        firstArtist: state.firstArtist
    }
};

const mapDispatchToProps = dispatch => {
    return {
        renderGame: () => dispatch(actions.renderGame())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);