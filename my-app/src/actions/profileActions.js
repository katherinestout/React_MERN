import axios from 'axios';
import {GET_PROFILE, PROFILE_LOADING, GET_ERRORS} from './types';


//get current profile
//hits the api and gets the user profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('./api/profile')
    .then(res => 
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        )
/*
the reason for this (.catch) is that you can register as a user and 
not have a profile ,if it is empty we want it to have a button that says 
hey you need to create a profile 
*/
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
            )
}

//Profile Loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}