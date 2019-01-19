//map through posts passed into postcontent in Posts.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PostItem from './PostItem';
//import {getProfiles} from '../../actions/profileActions';

class PostFeed extends Component {


  render() {

    //destructuring taking the posts out of props
    const {posts, profile} = this.props;

    return posts.map(
  post => <PostItem key = {post._id} post = {post} profile={profile}/>
    );
  }
}

PostFeed.propTypes = {
    posts: PropTypes.array.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(PostFeed);
