import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        //all of the states (remember the api!)
        this.state ={
            email: '',
            password: '',
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
        const user = {
            
            email: this.state.email,
            password: this.state.password
         
        }
        console.log(user);

    
  }
  render() {
       return (
      <div className="login">
      <div className="container">
      <form onSubmit = {this.onSubmit}>
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
        <input type="submit" className="btn btn-info btn-block mt-4" />
</form>

    </div>
      </div>
    )
}
}


export default Login;
