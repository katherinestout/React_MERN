import React, { Component } from 'react';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import classnames from 'classnames';

class Register extends Component {
    constructor(){
        super();
        //all of the states (remember the api!)
        this.state ={
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}

        };

        //you need this below to pass the onchange to every input
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


     componentWillReceiveProps(nextProps){
         if(nextProps.errors){
             this.setState({errors: nextProps.errors});

         }
     }
    //e is event parameter
    //whenever user types, it fires off onchange event
    //set whatever is put in input you put in state variables
    onChange(e){
        //since we have more than just one thing, we set it to value of input
        //whatever user types we can get from this below
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);

    }

  render() {
    const {errors} = this.state;
      //const {user} = this.props.auth;
    
     

    return (
 
    <div className="register">

   

    <div className="container">
    <form noValidate onSubmit = {this.onSubmit}>

        <div className ="form-group">
        <input
        type="text"
        className = {classnames('form-control form-control-lg', {'is-invalid': errors.name })}
        placeholder ="Name"
        name="name"
        //link input to state value
        value={this.state.name}
        //onchange function
        onChange={this.onChange}
       />

       {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}

        </div>
        <div className ="form-group">
        <input
        type="email"
        className = {classnames('form-control form-control-lg', {'is-invalid': errors.email })}
        placeholder="Email Address"
        name="email"
        //link input to state value
        value={this.state.email}
        //onchange function
        onChange={this.onChange}
       />
        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
        </div>
        <div className ="form-group">
        <input
        type="password"
        className = {classnames('form-control form-control-lg', {'is-invalid': errors.password })}
        name="password"
        placeholder="password!"
        //link input to state value
        value={this.state.password}
        //onchange function
        onChange={this.onChange}
       />
        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
        </div>
        <div className ="form-group">
        <input
        type="password2"
        className = {classnames('form-control form-control-lg', {'is-invalid': errors.password2 })}
        placeholder="validate password"
        name="password2"
        //link input to state value
        value={this.state.password2}
        //onchange function
        onChange={this.onChange}
       />
        {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
        </div>
        <input type="submit" className="btn btn-info btn-block mt-4" />
        </form>
     </div>
     </div>
    
    );
}
}


Register.propTypes = {
    registerUser : propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    errors: propTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(mapStateToProps, {registerUser}) (withRouter(Register));