import React, { Component } from 'react';
import isEmpty from './../../validation/is-empty';


class ProfileHeader extends Component {
  render() {
      const {profile} = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
        <h1>{profile.user.name}</h1>
        <p> {profile.handle}</p> 
        <p>{profile.bio}</p>
     
             <p>
            {isEmpty(profile.social && profile.social.twitter) ? null : (
                    <a href = {profile.social.twitter}>

                    <i className="fab fa-twitter"></i>
                    </a>

            )}
        </p>
        <p>
            {isEmpty(profile.social && profile.social.instagram) ? null : (
                    <a href = {profile.social.instagram}>

                    <i className="fab fa-instagram"></i>
                    </a>

            )}
        </p>

        <p className="cap">My Quotes:</p>
        
        </div>
      </div>
    )
  }
}



export default ProfileHeader;