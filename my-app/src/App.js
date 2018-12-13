import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';


import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';

import './App.css';
import { clearCurrentProfile } from './actions/profileActions';

//check for jwt token

if(localStorage.jwtToken) {
  //setting auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decoding the jwt token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
//then want to logout the user
store.dispatch(logoutUser());
//clear current profile
store.dispatch(clearCurrentProfile());
//Redirect to the Login page
window.location.href = '/login';

  }

}




class App extends Component {
  render() {
    return (
      //create store 
      <Provider store ={store}>
      <Router>
      <div className="App">
      <Navbar/>
      <Route exact path ="/" component={Landing}/>
      <div className ="container">
      <Route exact path ="/register" component ={ Register }/>
      <Route exact path ="/login" component ={ Login }/>
      <Switch>
      <PrivateRoute exact path ="/dashboard" component ={ Dashboard }/>
      </Switch>
      <Switch>
      <PrivateRoute exact path ="/create-profile" component ={ CreateProfile }/>
      </Switch>
      </div>
   
      <Footer/> 
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
