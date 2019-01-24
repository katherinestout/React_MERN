import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import {getProfileByHandle} from '../../actions/profileActions';

//Get posts and map over them only display if they match the id of the profile? or the handle?
import {getPosts} from '../../actions/postActions';
import ProfileFeed from '../profilePosts/ProfileFeed';


class Profile extends Component {
    componentDidMount(){
        if(this.props.match.params.handle){
            //check for the handle to match
                this.props.getProfileByHandle(this.props.match.params.handle);
        }
    }


  render() {
      //destucturing
      const {profile, loading} = this.props.profile;
      const {posts} = this.props.post;
  
      //initializing profileContent
      let profileContent;
    //check to see if profile is null or loading
      if(profile === null || loading){
          profileContent= <h4>Loading...</h4>
      } else {
          profileContent = (
                <div>
                    <div className="row">
                    <div className="col-md-6">
                    <Link to = "/profiles" className="btn btn-light float-left">
                    All Users
                    </Link>
                    </div>
                    <div className="col-md-6"/>
                    </div>

                    <ProfileHeader profile = {profile}/>
                    <ProfileFeed posts = {posts}/>
            
              
                </div>
          )
      }

    return (
<div className="profile">
<div className="container">
<div className="card profilecard">
<div className="row">
<div className="col-md-12">
{profileContent}
</div>
</div>
</div>
</div>
</div>
    )
  }
}

Profile.propTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,

    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    post: state.post
})

export default connect(mapStateToProps, {getProfileByHandle, getPosts})(Profile);