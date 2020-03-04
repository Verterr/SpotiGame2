import React, {Component} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './MainPage.css';

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

    render() {
        return (
            <div className="MainPage">
                <TopNavBar loggedIn={this.state.loggedIn}/>
                <div className="content">
                    <h1>SpotiGame</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor nec urna viverra commodo. In at dignissim enim. Nam ornare auctor lorem, vitae rutrum massa blandit quis. Nullam congue ultrices sem, ut faucibus odio facilisis ut. In id dapibus nunc. Mauris condimentum ipsum non tellus egestas dapibus. Ut luctus eros non auctor elementum. Proin feugiat tincidunt auctor. Donec ante ipsum, iaculis eget lorem eu, feugiat pulvinar nunc. Etiam arcu lacus, varius pellentesque aliquam at, pharetra ac ligula. Curabitur suscipit purus ut mi tempus cursus.
                    </p>
                    <br/>
                    <button onClick={() => this.playGameHandler()}>Graj</button>
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