import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <div className="row">
        <div className="col-sm-12">
        <h1> Welcome to CleverCap </h1>
        </div>
       </div>
       <div className="row">
       <div className="col-sm-12">
    <button type="button" className="btn btn-light"> <Link to = "/register">Sign Up!</Link> </button>

     <button type="button" className="btn btn-light"> <Link to = "/login">login</Link></button>
      </div>
      </div>
      </div>
      </div>
    );
  };
};

