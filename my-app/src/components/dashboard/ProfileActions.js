import React from 'react';
import {Link} from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div>
      <Link to ="/edit-profile" className="btn btn-dark">Edit Profile</Link>
      <Link to ="/my-quotes" className="btn btn-dark">My Quotes</Link>
  
      
    </div>
  );
};

export default ProfileActions;