import React, { Component } from 'react';

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
        }
        console.log(newUser);

    }

  render() {
    return (
 
    <div className="register">
    <div className="container">
    <form onSubmit = {this.onSubmit}>

        <div className ="form-group">
        <input
        type="text"
        className ="form-control"
        placeholder ="Name"
        name="name"
        //link input to state value
        value={this.state.name}
        //onchange function
        onChange={this.onChange}
       />
        </div>
        <div className ="form-group">
        <input
        type="email"
        className ="form-control"
        placeholder="Email Address"
        name="email"
        //link input to state value
        value={this.state.email}
        //onchange function
        onChange={this.onChange}
       />
        </div>
        <div className ="form-group">
        <input
        type="password"
        className ="form-control"
        name="password"
        placeholder="password!"
        //link input to state value
        value={this.state.password}
        //onchange function
        onChange={this.onChange}
       />
        </div>
        <div className ="form-group">
        <input
        type="password2"
        className ="form-control"
        placeholder="validate password"
        name="password2"
        //link input to state value
        value={this.state.password2}
        //onchange function
        onChange={this.onChange}
       />
        </div>
        <input type="submit" className="btn btn-info btn-block mt-4" />
        </form>
     </div>
     </div>
    
    ) 
}
}
export default Register;