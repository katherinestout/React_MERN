import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';

import {getProfileByHandle} from '../../actions/profileActions';


class Profile extends Component {
    componentDidMount(){
        if(this.props.match.params.handle){
            //check for the handle to match
                this.props.getProfileByHandle(this.props.match.params.handle);
        }
    }


  render() {
    return (
      <div>

      </div>
    )
  }
}

Profile.propTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfileByHandle})(Profile);