import React, { Component } from 'react';
//import {getPosts} from '../../actions/postActions';
import QuoteItem from './QuoteItem';
import PropTypes from 'prop-types';

class ProfileFeed extends Component {

    render() {
        //destructuring taking the posts out of props
        //map through posts passed into postcontent in Posts.js

      const {posts, auth} = this.props;
     // const {profiles} = this.props.profile;
     
      


function filterpost(post){
  if (post.handle === post.handle){
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
       // profile: PropTypes.object.isRequired
    }
    

export default ProfileFeed;
