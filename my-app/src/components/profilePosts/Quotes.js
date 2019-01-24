import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import PostForm from './PostForm';
import ProfilePosts from './ProfilePosts';
import {getPosts} from '../../actions/postActions';
//import Profile from '../profile/Profile';

class Quotes extends Component {

  componentDidMount(){
    this.props.getPosts();

  }

  render() {
    //destructuring
    const {posts, loading} = this.props.post;
 
    let quoteContent;

    if(posts === null || loading) {
      quoteContent = <h4>Loading...</h4>
    } else {
      quoteContent = <ProfilePosts posts = {posts} 
    />

    }

    return (
      <div className="feed">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        
        {quoteContent}
        
        </div>
        </div>
        
        </div>

        
      </div>
    );
  }
}

Quotes.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts})(Quotes);
