import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing jumbotron">
        <div className="container">
        <div className="row">
        <div className="col-sm-12">
        <h2 className="cap"> Welcome to CleverCap </h2>
        </div>
       </div>
       <div className="row">
       <div className="col-sm-12">
       <h3>Generate Captions for Instagram and Snapchat!</h3>
       </div>
       </div>
       <div className="row">
       <div className="col-sm-12">
    <button type="button" className="btn btn-light"> <Link to = "/register">Sign Up</Link> </button>
    <button type="button" className="btn btn-light"> <Link to = "/login">login</Link></button>
      </div>
      </div>
      </div>
      </div>
    );
  };
};

