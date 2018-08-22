import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER} from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

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

//login -- get the user token
export const loginUser = (userData) => dispatch => {
    axios.post('/api/userslogin', userData)
    .then(res => {
//then save it to localstorage
const {token} = res.data;
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
    }));
};

//set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}