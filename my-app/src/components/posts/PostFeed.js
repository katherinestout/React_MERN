
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends Component {

  render() {
    //destructuring taking the posts out of props
    //map through posts passed into postcontent in Posts.js
  const {posts} = this.props;

    return posts.map(
  post=> <PostItem key = {post._id} post = {post} 
 
 />
    );
  }
}

PostFeed.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostFeed;
