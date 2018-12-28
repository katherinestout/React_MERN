import {GET_PROFILE, 
    GET_PROFILES,
    PROFILE_LOADING, 
    CLEAR_CURRENT_PROFILE} 
    from '../actions/types';



//fetching profiles
const initialState = {
    profile: null,
    profiles: null,
    loading: false
};

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
    return {
        ...state,
        profile: action.payload,
        loading: false
    };
    case GET_PROFILES:
    return{
        ...state,
        profiles: action.payload,
        loading: false
    };
    case CLEAR_CURRENT_PROFILE:
    return{
        ...state,
        profile: null
    };
    default:
    return state;
}
}