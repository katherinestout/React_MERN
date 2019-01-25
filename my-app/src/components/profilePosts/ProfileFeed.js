import React, { Component } from 'react';
//import {getPosts} from '../../actions/postActions';
import QuoteItem from './QuoteItem';
import PropTypes from 'prop-types';

class ProfileFeed extends Component {

    render() {
        //destructuring taking the posts out of props
        //map through posts passed into postcontent in Posts.js

      const {posts, profile} = this.props;
     // const {profiles} = this.props.profile;
     
      


function filterpost(post, profile){
  if (post.name === profile.name){
    return post;
  }
}
const myposts = posts.filter(filterpost);
console.log(myposts);


          return posts.map(
        
                  post=> <QuoteItem key = {post._id} post = {post}/>
                    );
                    
                  }
                }
              
        


    ProfileFeed.propTypes = {
        posts: PropTypes.array.isRequired,
        profile: PropTypes.array.isRequired
    }
    

export default ProfileFeed;
