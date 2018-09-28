import {GET_PROFILE, PROFILE_LOADING} from '../actions/types';



//fetching profiles
const initialState = {
    profile: null,
    profiles: null,
    loading: false
}

export default function( state = initialState, action){
    //switch statement based on type
switch(action.type) {
    //profile_loading, setstate
    case PROFILE_LOADING:
    return{
        ...state,
        loading: true
    };
    //Get_profile
    //payload will be empty and get set to that user
    //if there is no profile yet, will be able to create a profile
    case GET_PROFILE:
    return{
        ...state,
        profile: action.payload,
        loading: false
    };
    default:
    return state;
}
}