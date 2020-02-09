import React, {Component} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './mainPage.css';

import TopNavBar from '../topNavBar/topNavBar';

const spotifyWebApi = new SpotifyWebApi();

class MainPage extends Component {

    constructor(props){
        super(props);
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            spotifyWebApi.setAccessToken(token);
        }
        this.state = {
            loggedIn: token ? true : false,
            username: '',
            //Game info
            status: 'menu',
            startArtistId: '1w5Kfo2jwwIPruYS2UWh56',// TODO: vchose random artist in genre
            endArtistId: '',
            artistPath: [],
            genre: ['rock', 'grunge']
        };
    }

    playGameHandler = () => {
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
                <TopNavBar />
                <div className="content">
                    <h1>SpotiGame</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor nec urna viverra commodo. In at dignissim enim. Nam ornare auctor lorem, vitae rutrum massa blandit quis. Nullam congue ultrices sem, ut faucibus odio facilisis ut. In id dapibus nunc. Mauris condimentum ipsum non tellus egestas dapibus. Ut luctus eros non auctor elementum. Proin feugiat tincidunt auctor. Donec ante ipsum, iaculis eget lorem eu, feugiat pulvinar nunc. Etiam arcu lacus, varius pellentesque aliquam at, pharetra ac ligula. Curabitur suscipit purus ut mi tempus cursus.
                    </p>
                    <br/>
                    <button onClick={this.playGameHandler}>Graj</button>
                </div>
            </div>
        )
    }

}


export default MainPage;