import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

 class Landing extends Component {
  render() {
    return (
      <div className="landing ">
        <div className="container  jumbotron">
        <div className="row">
        <div className="col-sm-12">
        <h2 className="cap"> Welcome to CleverCap </h2>
        <p>Discover Unique Captions for Instagram!</p>
        <p>To get started:</p>
        </div>
       </div>
       <div className="row">
       </div>
       <div className="row">
       <div className="col-sm-12">

    <Link to = "/register" className="btn btn-light">Sign Up</Link>

    <Link to = "/login" className="btn btn-light">Log In</Link>
      </div>
      </div>
      </div>
      </div>
    );
  };
};


Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
auth: state.auth
});

export default connect(mapStateToProps)(Landing);
