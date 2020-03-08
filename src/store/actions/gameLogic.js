import * as actionTypes from './actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyWebApi = new SpotifyWebApi();


export const renderGame = () => {

    const firstArtistId = '0PFtn5NtBbbUNbU9EAmIWF';

    spotifyWebApi.setAccessToken(localStorage.getItem('token'));


    return dispatch => {

        dispatch(getCurrentArtist(firstArtistId));
        // dispatch(loadingPauser());
        // dispatch(getRelatedArtists(firstArtistId));
        // let resolveFinalArray = ['0PFtn5NtBbbUNbU9EAmIWF'];
        // let IdsArray = [];
        // for(let i=0; i<5; i++) {
        //     console.log('Loop number = ' +  i);
        //     console.log('Initial ID = ' + resolveFinalArray[0]);
        //     IdsArray.push(
        //         spotifyWebApi.getArtistRelatedArtists(resolveFinalArray[0])
        //         .then(res => {
        //             return res.artists[0].id
        //         }));
        //     resolveFinalArray = await Promise.all(IdsArray);
        //     console.log(resolveFinalArray);
        // }
        }
};

export const getCurrentArtist = id => {
    return dispatch => {
        spotifyWebApi.getArtist(id)
            .then(res => {
                dispatch(initFirstArtist(res));
                dispatch(loadingPauser());
            });
    };
};

export const initFirstArtist = (firstArtist) => {
    return {
        type: actionTypes.INIT_FIRST_ARTIST,
        firstArtist: firstArtist
    }
};

export const initTargetArtist = targetArtist => {
    return {
        type: actionTypes.INIT_TARGET_ARTIST,
        targetArtist: targetArtist
    }
};

export const loadingPauser = () => {
    return {
        type: actionTypes.LOADING_PAUSE,
        loading: false
    }
};