import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profileActions';

class Dashboard extends Component{
    componentDidMount() {
        this.props.getCurrentProfile();
        //getCurrentProfile is being called when we enter the dashboard
    }
    render(){

        //destructuring
        const {user} = this.props.auth;
        const {profile, loading} = this.props.profile;
        //initialize dashboardContent
        let dashboardContent;
        //want to make sure profile state is not null
        //if profile is equal to null or loading is true
        if(profile === null || loading) {
            //if it is null:
            dashboardContent = <h4>Loading...</h4>

        } else {
    //Check if logged in user has profile data
       //object.keys gets key of profile object
       //if it is greater than 0 than that means there is already a profile created
           if(Object.keys(profile).length > 0){
                dashboardContent = <h4>ya gotta DISPLAY PROFILE</h4>
           } else {
        //user is logged in but has no profile
        dashboardContent = (
            <div>
                <p className="lead text-muted">
                Welcome {user.name}
                </p>
                <p>Ya gotta set up a profile so add some info</p>
                <Link to ="/create-profile" className="btn btn-dark">
                Create a Profile!
                </Link>
            </div>
        )
           }
        }
        return(
<div className="dashboard">
<div className ="container">
<div className = "row">
<div className ="col-md-12">

 <h1 className="display-4">Dashboard</h1>
 
{dashboardContent}
</div>
</div>
</div>
   
</div>
        );
    }
}
//PS everything will appear in  {dashboardContent} !


//Bring in profile state and auth state
//getCurrentProfile is a property, auth and profile are objects

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}
//Bring in proptypes
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});


export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);