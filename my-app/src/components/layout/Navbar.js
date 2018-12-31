import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {clearCurrentProfile} from '../../actions/profileActions';


/* 

        <Link to = "/profiles"className = "btn btn-outline-light" >
      {''}
      Users hello</Link>
*/


class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };
  
  render() {
    //get from auth property, pull out isAuthenticated and user obj 

    const {isAuthenticated, user} = this.props.auth;



    const authLinks = (
   
        <ul className="navbar-nav">
        <li className="nav-item">
        {user.name}
          <Link className="btn btn-outline-light" to="/dashboard">
            Dashboard
          </Link>
          <Link className=" btn btn-outline-light" to="/main-quotes">
            Quotes Feed
          </Link>
          <Link className=" btn btn-outline-light" to="/feed">
           Post Feed
          </Link>
    
     
        <a href = "" onClick={this.onLogoutClick.bind(this)} className="btn btn-outline-light">
        Logout</a>

        <Link className="btn btn-outline-light" to = "/profiles">
        All Users
        </Link>
        </li>
    

        </ul>

    );


    const guestLinks = (


      <ul className="navbar-nav">
      <li className="nav-item">
  
      <Link to = "/register" className="btn btn-outline-light">Sign Up</Link>
      <Link to = "/login" className="btn btn-outline-light">Log In</Link>
   
      </li>
      </ul>

    );

    return (

    <nav className="navbar navbar-default fixed-top">
    <div className="container">
  
    <h1 className="cap">
    <i className="far fa-comment">
     </i>CleverCap</h1>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
   
    
      </li>
     
      </ul>
      {isAuthenticated ? authLinks : guestLinks}
      

      </div>
      </nav>

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


export default connect(mapStateToProps, {logoutUser, clearCurrentProfile}) (Navbar);
