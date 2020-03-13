import * as actionTypes from './actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';
import {getRelatedArtist} from '../../Containers/Game/gameLogic';

const spotifyWebApi = new SpotifyWebApi();

export const renderGame = () => {

    spotifyWebApi.setAccessToken(localStorage.getItem('token'));


    return dispatch => {

        spotifyWebApi.getRecommendations({seed_genres: 'rock', limit: 20})
            .then(res => {
                let firstArtist = res.tracks[1].artists[0];
                dispatch(getFirstArtist(firstArtist.id));
                getRelatedArtist(firstArtist.id).then(res => {
                        getRelatedArtist(res.artists[0].id).then(res => {
                            getRelatedArtist(res.artists[0].id).then(res => {
                                getRelatedArtist(res.artists[0].id).then(res => {
                                    getRelatedArtist(res.artists[0].id).then(res => {
                                        console.log(res.artists[0]);
                                        dispatch(initTargetArtist(res.artists[0]));
                                        dispatch(loadingPauser());
                                    })
                                })
                            })
                        })
                    });
            });
        // dispatch(getFirstArtist(firstArtistId));
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

export const getFirstArtist = id => {
    return dispatch => {
        spotifyWebApi.getArtist(id)
            .then(res => {
                dispatch({
                    type: actionTypes.INIT_FIRST_ARTIST,
                    firstArtist: res
                });
            });
    };
};

export const setCurrentArtist= id => {
    return dispatch => {
        spotifyWebApi.getArtist(id)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_CURRENT_ARTIST,
                    currentArtist: res
                });
                dispatch(loadingPauser());
            });
    };
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