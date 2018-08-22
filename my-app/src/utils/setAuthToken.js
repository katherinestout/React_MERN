import axios from 'axios';

const setAuthToken = token => {
    if(token){
        //if exsists then apply to every request
        axios.default.headers.common['Authorization'] = token;
        //if token isnt there we want to delete auth header

    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;