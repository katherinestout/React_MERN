import React from 'react';
import {Link} from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div>
       <button className= "btn btn-light"><Link to ="/edit-profile"></Link></button> 
        <button className="btn btn-light"><Link to ="/add-quotes"></Link></button> 
      
    </div>
  );
};

export default ProfileActions;