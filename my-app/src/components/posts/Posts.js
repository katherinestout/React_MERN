import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import {getPosts} from '../../actions/postActions';

//import {getProfiles} from '../../actions/profileActions';

//import {getProfileByHandle} from '../../actions/profileActions';



class Posts extends Component {

  componentDidMount(){
    this.props.getPosts();

  }

  render() {
    //destructuring
    const {posts, loading} = this.props.post;

   // const {profile} = this.props;
 
    let postContent;

    if(posts === null || loading) {
      postContent = <h4>Loading...</h4>
    } else {
      postContent = <PostFeed posts = {posts} 
     // profile = {profile}
    />

    }

    return (
      <div className="feed">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        
        <PostForm/>
        {postContent}
        
        </div>
        </div>
        
        </div>

        
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  //getProfileByHandle: PropTypes.func.isRequired,
  //getProfiles: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
 // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
  //profile: state.profile
});

export default connect(mapStateToProps, { getPosts})(Posts);
