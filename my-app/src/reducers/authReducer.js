import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../validation/is-empty';


const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case SET_CURRENT_USER:
        return{
            ...state,
//if filled with decoded user we are authenticated, if not we shouldnt be authenticated
//user will be actual payload          
isAuthenticated: !isEmpty(action.payload),
            user: action.payload

        }
        default:
        return state;
    }

}