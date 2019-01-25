import React, { Component } from 'react';
//import {getPosts} from '../../actions/postActions';
import QuoteItem from './QuoteItem';
import PropTypes from 'prop-types';
import { connect } from 'mongoose';

class ProfileFeed extends Component {

    render() {
        //destructuring taking the posts out of props
        //map through posts passed into postcontent in Posts.js

      const {posts} = this.props;
   
     // const {profile} = this.props.profile;
     
      




function filterpost(post){
  if (post.handle === 'KateTheGreat'){
    return posts;
  }
}
const myposts = posts.filter(filterpost);
console.log(myposts);
          return myposts.map(
                  post=> <QuoteItem key = {post._id} post = {post}
                />
                    );
                    
                  }
                }
              
        


    ProfileFeed.propTypes = {
        posts: PropTypes.array.isRequired,
      //  profile: PropTypes.object.isRequired
    }
    

export default ProfileFeed;
