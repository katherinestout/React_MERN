import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

export class CreateProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            
            handle: '',
            bio: '',
            twitter: '',
            instagram: '',
            errors: {}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getCurrentProfile();
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        if(nextProps.profile.profile){
            const profile = nextProps.profile.profile;
            //bring skills array back to 
            //const skillsCSV = profile.skills.join(',')
            //if profile field doesn't exsist make empty string

            profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
            profile.social = !isEmpty(profile.social) ? profile.social : {};
            profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
            profile.instagram= !isEmpty(profile.social.instagram) ? profile.social.instagram : '';
        
        //set component fields state
        this.setState({
            handle: profile.handle,
            bio: profile.bio,
            twitter: profile.twitter,
            instagram: profile.instagram

        });
        
        }
    }

    onSubmit(e){
        e.preventDefault();
      const profileData = {

        handle: this.state.handle,
        bio: this.state.bio,
        twitter: this.state.twitter,
        instagram: this.state.instagram

      }

      this.props.createProfile(profileData, this.props.history);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


  render() {
      const {errors, displaySocialInputs} =this.state;

      let socialInputs;

      if(displaySocialInputs){
        socialInputs=(
            <div>
                <InputGroup
                placeholder="Twitter Profile URL"
                name="twitter"
                icon="fab fa-twitter"
                value ={this.state.twitter}
                onChange={this.onChange}
                error={errors.twitter}
                />

                <InputGroup
                placeholder="Instagram Profile URL"
                name="instagram"
                icon="fab fa-instagram"
                value ={this.state.instagram}
                onChange={this.onChange}
                error={errors.instagram}
                />

        
            </div>
        )
      } 

    
    return (
      <div className="create-profile">
        <div className ="container">
        <div className= "row">
        <div className="col-md-8 m-auto">
        <h1 className="display-4 text-center">Edit Profile</h1> 
       
        <small className="d-block pb-3"> * = required fields
        </small>
        <form onSubmit={this.onSubmit}>
        <TextFieldGroup
        placeholder="* Profile Handle"
        name="handle"
        value={this.state.handle}
        onChange={this.onChange}
        error={errors.handle}
        info="A unique handle for your profile URL. Your full name, nickname ect."
        />
          <TextAreaFieldGroup
        placeholder="* Short Bio"
        name="bio"
        value={this.state.bio}
        onChange={this.onChange}
        error={errors.bio}
        info="A little about yourself"
        />
        <div className="mb-3">

        <button 
        type = "button"
        onClick = {() => {
            this.setState(prevState => ({
                displaySocialInputs: !prevState.displaySocialInputs
            }));
        }} 
        className="btn btn-light"
        >
        Add Social Network Links
         </button>
         <span className="text-muted">Optional</span>
         </div>


        {socialInputs}
        <input type = "submit"
            value="submit"
            className="btn btn-info btn-block mt-4"/>

        </form>
        </div> 
        </div>
        </div>
      </div>
    )
  }
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
  });

  export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
   (CreateProfile)
  );