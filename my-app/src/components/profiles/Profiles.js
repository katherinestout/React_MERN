import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';
import {getProfiles} from '../../actions/profileActions';

class Profiles extends Component {
    componentDidMount() {
        this.props.getProfiles();
    }
  render() {

    const {profiles, loading} = this.props.profile;
    
    let profileItems;

    if(profiles === null || loading) {
        profileItems = <h4>Loading...</h4>;
    } else {
        //mapping through profiles
        if (profiles.length > 0) {
            profileItems = profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ));

        } else {
            profileItems = <h4>No Profiles Found </h4>;
        }
    }
    return (
      <div className="profiles">
      <div className = "container">
          <div className="row">
          <div className="col-md-12">
          <h1>All of the Clever Cap Profiles! </h1>
          <p className="cap">
              Browse other quote lovers.
          </p>
          {profileItems}
          </div>
          </div>
      </div>
        
      </div>
    );
  }
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, {getProfiles})(Profiles);
