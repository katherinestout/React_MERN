import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import PostForm from './PostForm';
import ProfileFeed from './ProfileFeed';
import {getPosts} from '../../actions/postActions';


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
      quoteContent = <ProfileFeed posts = {posts} 
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