import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    firstArtist: '',
    currentArtist: '',
    targetArtist: '',
    loading: true
};

const gameLogicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_FIRST_ARTIST:
            return updateObject(state ,{firstArtist: action.firstArtist, currentArtist: action.firstArtist});
        case actionTypes.INIT_TARGET_ARTIST:
            return updateObject(state, {targetArtist: action.targetArtist});
        case actionTypes.SET_CURRENT_ARTIST:
            return updateObject(state, {currentArtist: action.currentArtist});
        case actionTypes.LOADING_PAUSE:
            return updateObject(state, {loading: action.loading});
        default:
            return state
    }
};

export default gameLogicReducer;