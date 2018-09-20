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
    
    <div>
      <Link className = "nav-link" to = "/register">Sign Up</Link>
      <Link className = "nav-link" to = "/login">Login</Link>
      </div>
    );

    const authLinks = (
        <ul className="navbar-nav">
        <li className="nav-item">
        <a href = "" onClick={this.onLogoutClick.bind(this)}>Logout</a>
        {user.name}
        </li>
        </ul>
    );

    return (
    <div>
    <nav className="navbar navbar-light bg-light fixed-top">
     <h1 className="cap"><i className="far fa-comment"></i>CleverCap</h1>
     
      <ul className="navbar-nav">
        <li className="nav-item">
      <Link className = "nav-link" to = "/profiles">
      {''}
      Profile</Link>
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
