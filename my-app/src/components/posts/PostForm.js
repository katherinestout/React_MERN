import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import {addPost} from '../../actions/postActions';

class PostForm extends Component {

constructor(props){
    super(props);
    this.state={
        text: '',
        errors: {}
        //profile?
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

//where it does the actual error checking
//when it shows up on the screen
componentWillReceiveProps(newProps){
  if(newProps.errors){
    this.setState({errors: newProps.errors })
  } 

}

onSubmit(e){
  e.preventDefault();

  const {user} = this.props.auth;

         const {profile} = this.props.profile;
 

  const newPost = {
    text: this.state.text,
    name: user.name,
    handle: profile.handle
 
  };

  this.props.addPost(newPost);
  //clearing the text field
  this.setState({text: ''});
} 

onChange(e){
  this.setState({[e.target.name]: e.target.value});
}

  render() {
//destructuring
    const{errors} = this.state;

    return (
      <div className="post-form">
      <div className="card card-info">
      <div className="card-header">
      Say something...
      </div>
      <div className="card-body">
      <form onSubmit = {this.onSubmit}>
          <div className="form-group">
          <TextAreaFieldGroup
          placeholder="Create a post!"
          name="text"
          value= {this.state.text}
          onChange={this.onChange}
          error ={errors.text}
          />
          </div>
          <button type="submit" className="btn btn-dark">
          Submit
          </button>
      </form>
      </div>
      </div> 
      </div>
    )
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,

  profile: state.profile

});

export default connect(mapStateToProps, {addPost})(PostForm);