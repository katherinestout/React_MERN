
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostItem from './PostItem';

import {connect} from 'react-redux';
//import {getProfiles} from '../../actions/profileActions';


class PostFeed extends Component {


  render() {
    //destructuring taking the posts and profile out of props

    //map through posts passed into postcontent in Posts.js
  const {posts} = this.props;
  const {profile} = this.props.profile;



    return posts.map(
  post=> <PostItem key = {post._id} post = {post} 
  profile = {profile}
 />
    );
  }
}

PostFeed.propTypes = {
    posts: PropTypes.array.isRequired,
    profile: PropTypes.object.isRequired,

   // getProfiles: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  profile: state.profile
});


export default connect (mapStateToProps)(PostFeed);
