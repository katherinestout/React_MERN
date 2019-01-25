import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import PostForm from './PostForm';
import ProfileFeed from './ProfileFeed';
import {getPosts} from '../../actions/postActions';
//import {getProfiles} from '../../actions/profileActions';
import './quotesStyle.css';


class Quotes extends Component {

  componentDidMount(){
    this.props.getPosts();

  }

  render() {
    //destructuring
    const {posts, loading} = this.props.post;
    const {profile} = this.props.profile;
 
    let quoteContent;

    if(posts === null || loading) {
      quoteContent = <h4>Loading...</h4>
    } else  {
      quoteContent = <ProfileFeed posts = {posts} 
      profile = {profile}
    />

    }

    return (
      <div className="quotefeed">
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
 // profile: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
  post: state.post
 //profile: state.profile
});

export default connect(mapStateToProps, {getPosts})(Quotes);
