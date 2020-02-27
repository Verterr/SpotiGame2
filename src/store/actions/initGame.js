import * as actionTypes from './actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyWebApi = new SpotifyWebApi();


export const renderGame = () => {

        const firstArtistId = '0PFtn5NtBbbUNbU9EAmIWF';

        spotifyWebApi.setAccessToken(localStorage.getItem('token'));


        return dispatch => spotifyWebApi.getArtist(firstArtistId)
            .then(res => {
                    console.log(res);
                    dispatch(initGame(res));
                }
            );

    // spotifyWebApi.getArtistTopTracks(artistId, 'PL')
    //     .then(res => {
    //         console.log({
    //             trackPrev: res.tracks,
    //             loading: false
    //         });
    //     });
};

export const initGame = (firstArtist) => {
    return {
        type: actionTypes.INIT_FIRST_ARTIST,
        firstArtist: firstArtist
    }
};