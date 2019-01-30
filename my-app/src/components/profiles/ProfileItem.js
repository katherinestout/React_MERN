import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


//passing in each profile to display on Profiles

class ProfileItem extends Component {
  render() {
      const{profile} = this.props;
      
    return (
      <div className ="card card-body"> 
        <div className="profiles-body">
        <p className="cap">{profile.user.name}</p>
        <p>About Me: {profile.bio}


        <Link to ={`/profile/${profile.handle}`} 
            >
          <button className="text-center handle-button-profile button cap" type="button"> 
        
            View Profile
         </button>   </Link>
         </p>
        </div>
      </div>
    )
  }
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;