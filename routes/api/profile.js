const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Bring in profile model
const Profile = require('../../models/Profile');
// Bring in user profile
const Profile = require('../../models/User');

//Route: GET request to api/profile/test
//this is a public route

router.get('/test', (req ,res) => res.json({msg: "profile WORKS!"}));

// Route that gets the current users profile
//private access route
//get api/profile

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    Profile.findOne({ user })
});




module.exports = router;