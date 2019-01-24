import React, { Component } from 'react';
//import {getPosts} from '../../actions/postActions';
import QuoteItem from './QuoteItem';
import PropTypes from 'prop-types';

class ProfilePosts extends Component {

    render() {
        //destructuring taking the posts out of props
        //map through posts passed into postcontent in Posts.js
      const {posts} = this.props;
    
        return posts.map(
      post=> <QuoteItem key = {post._id} post = {post}/>
        );
      }
    }


    ProfilePosts.propTypes = {
        posts: PropTypes.array.isRequired,
    }
    

export default ProfilePosts;
