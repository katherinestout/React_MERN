import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  
  render() {
    return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
     <h1 className="cap"><i class="far fa-comment"></i>CleverCap</h1>
      <div className="navlinks">
      <Link className = "nav-link" to = "/register">Sign Up</Link>
      <Link className = "nav-link" to = "/login">Login</Link>
      <Link className = "nav-link" to = "/profiles">Profile</Link>
      </div>
      </nav>

    </div>
  )
}
}

export default Navbar;
