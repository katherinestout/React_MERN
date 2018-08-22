import axios from 'axios';
import { GET_ERRORS} from './types';

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
    })
    //errors
    .catch(err =>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};