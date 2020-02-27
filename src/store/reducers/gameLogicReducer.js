import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    firstArtist: 'test',
    targetArtist: '',
    firstArtistTracks: '',
    targetArtistTracks: ''
};

const gameLogicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_FIRST_ARTIST:
            return updateObject(state ,{firstArtist: action.firstArtist});
        default:
            return state
    }
};

export default gameLogicReducer;