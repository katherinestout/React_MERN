import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER} from './types';

//register user
export const registerUser = (userData, history) => dispatch => {

    axios.post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
);
};

//login -- to get the user token
export const loginUser = userData => dispatch => {
    axios
    .post('/api/users/login', userData)
    .then(res => {
//then save user token to localstorage
const {token} = res.data;
console.log(token);
//set the token to local storage
localStorage.setItem('jwtToken', token);
//set token to auth header
setAuthToken(token);

//decode token to get user data
//whats going to be stored in here is user data, issued at date, and expiration of token
const decoded = jwt_decode(token);
//set current user
dispatch(setCurrentUser(decoded));

    })
    //errors
    .catch(err =>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
);
};

//set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

//Log out functionality
export const logoutUser = () => dispatch =>{
    //This removes token from localStorage
    localStorage.removeItem('jwtToken');
    //remove auth header for future requests
    setAuthToken(false);
    //Calling/setting current user to {} which will set isAuthenticated to false
    //user will get sent back to payload
    //it becomes empty therefore logging out
    dispatch(setCurrentUser({}));

};