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
        </div>
       </div>
       <div className="row">
       <div className="col-sm-12">
       <h3>Generate Unique Captions<br></br> for Instagram!</h3>
       </div>
       </div>
       <div className="row">
       <div className="col-sm-12">

    <Link to = "/register" className="btn btn-outline-light">Sign Up</Link>

    <Link to = "/login" className="btn btn-outline-light">Log In</Link>
      </div>
      </div>
      </div>
      </div>
    );
  };
};

//add proptypes
Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
auth: state.auth
});

export default connect(mapStateToProps)(Landing);
