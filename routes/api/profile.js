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
    const erors = {};

    Profile.findOne({ user: req.user.id })
    .then(profile => {
        if(!profile){
            errors.noprofile = 'There is no profile found for this user!';
            return res.status(404).json(errors);
        }
        res.json(profile);
    }).catch(err => res.status(404).json(err));
});




module.exports = router;