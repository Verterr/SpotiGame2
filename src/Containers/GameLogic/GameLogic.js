import React, {Components} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import * as actions from '../../store/actions/initGame';
import {connect} from "react-redux";
const spotifyWebApi = new SpotifyWebApi();

const initializeArtistIds = props => {

        const firstArtistId = '0PFtn5NtBbbUNbU9EAmIWF';
        const targetArtistId = '0PFtn5NtBbbUNbU9EAmIWF';

        props.initGame(firstArtistId, targetArtistId)

    // spotifyWebApi.setAccessToken(localStorage.getItem('token'));
    //
    // spotifyWebApi.getArtist(artistId)
    //     .then(res => {
    //         return artist = {
    //             artistImg: res.images[0].url,
    //             artistName: res.name,
    //             artistGenre: res.genres,
    //         }});
    //
    // spotifyWebApi.getArtistTopTracks(artistId, 'PL')
    //     .then(res => {
    //         console.log({
    //             trackPrev: res.tracks,
    //             loading: false
    //         });
    //     });
};

const mapDispatchToProps = dispatch => {
    return {
        initGame: (firstArtistId, lastArtistId) => dispatch(actions.initGame(firstArtistId, lastArtistId))
    }
};

export default connect(null, mapDispatchToProps)(initializeArtistIds);