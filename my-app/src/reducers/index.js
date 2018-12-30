import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';


//all of the reducers
/*
a reducer is a function that takes the current state and an action, 
and returns the next state. 
They specify how the applications state changes in response to actions
sent to the store.
In essence, simplifies things and "reduces" them
*/


export default combineReducers ({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer,
    post: postReducer
});