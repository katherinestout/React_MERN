import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
//binding "this" to onchange and onsubmit
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

//componentDidMount is invoked immediately after you press submit
//pushes to dashboard page if authenticated

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

//componentWillRecieveProps is recieving new props, when they are passed into component
//update for the login component

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    //if authenticated push to dashboard, if not then errors

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  
render() {
    const { errors } = this.state;

  return (
    <div className="login">
      <div className="container">
        <div className="row">
         <div className="col-md-8 m-auto">
              <h1 className="cap">Log In</h1>
              <p className="heading">
                Log In to your Account
              </p>
              <form onSubmit={this.onSubmit}>
<TextFieldGroup
placeholder = "Email Address"
name="email"
type="email"
value={this.state.email}
onChange={this.onChange}
error={errors.email}
/>
<TextFieldGroup
placeholder = "Password"
name="password"
type="password"
value={this.state.password}
onChange={this.onChange}
error={errors.password}
/>
                <input type="submit" className="btn btn-light btn-block" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Add the login to proptypes

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


//mapStateToProps is a filter used to select which things from the store are required by the component
//the selected things become the component properties
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

//The connect from Redux connects the mapStateToProps and the store
//without connect, the mapStateToProps doesn't know where to "go"
export default connect(mapStateToProps, { loginUser })(Login);
