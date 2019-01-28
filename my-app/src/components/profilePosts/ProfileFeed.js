import React, { Component } from 'react';
import QuoteItem from './QuoteItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ProfileFeed extends Component {

    render() {
        //destructuring taking the posts out of props
        //map through posts passed into postcontent in Posts.js

      const {posts} = this.props;
   
      const {profile} = this.props.profile;
     

//filtering through all posts and matching them to the current profile's handle
//putting them in myposts
function filterpost(post){
  if (post.handle === profile.handle){
    return posts;
  }
}

const myPosts = posts.filter(filterpost);

//mapping through all of the posts that belong to the current user

          return myPosts.map(
                  post=> <QuoteItem key = {post._id} post = {post}
                  profile = {profile}
                />
                    );
                    
                  }
                }
              
    ProfileFeed.propTypes = {
        posts: PropTypes.array.isRequired,
        profile: PropTypes.object.isRequired
    }



    const mapStateToProps = state => ({

    profile: state.profile
  
  });
export default connect (mapStateToProps)(ProfileFeed);
