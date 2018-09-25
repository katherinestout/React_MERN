import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  render() {
    //get from auth property, pull out isAuthenticated and user obj 

    const {isAuthenticated, user} = this.props.auth;

    const guestLinks = (

      <nav>
      <ul className="navbar-nav">
      <li className="nav-item">
  
      <Link to = "/register" className="btn btn-outline-light">Sign Up</Link>
      <Link to = "/login" className="btn btn-outline-light">Log In</Link>
   
      </li>
      </ul>
      </nav>
    );

    const authLinks = (
      <nav>
        <ul className="navbar-nav">
        <li className="nav-item">
        {user.name}
        <a href = "" onClick={this.onLogoutClick.bind(this)} className="btn btn-outline-light">
        Logout</a>
        <Link to = "/profiles"className = "btn btn-outline-light" >
      {''}
      Profile</Link>
        </li>
        </ul>
        </nav>    
    );

    return (
    <div>
    <nav className="navbar navbar-default fixed-top">
     <h1 className="cap"><i className="far fa-comment"></i>CleverCap</h1>
      <ul className="navbar-nav">
        <li className="nav-item">
    
      </li>
     
      </ul>
      {isAuthenticated ? authLinks : guestLinks}
      
      </nav>

    </div>
  );
}
}

//logout functionality links change
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default connect(mapStateToProps, {logoutUser}) (Navbar);
