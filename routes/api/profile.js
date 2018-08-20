const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Bring in profile model
const Profile = require('../../models/Profile');
// Bring in user profile
const User = require('../../models/User');

//Route: GET request to api/profile/test
//this is a public route

router.get('/test', (req ,res) => res.json({msg: "profile WORKS!"}));

// Route that creates user profile
//private access route
//POST api/profile

router.post('/', passport.authenticate('jwt', {session: false}), 
(req, res) => {
  //GET fields
  //filling profile fields object
const profileFields = {};
profileFields.user = req.user.id;
if(req.body.handle) profileFields.handle = req.body.handle;
if(req.body.instagram) profileFields.handle = req.body.instagram;
if(req.body.name) profileFields.name = req.body.name;

//search for user by id
Profile.findOne({user: req.user.id})
.then(profile => {
    if(profile){
        //if they have a profile then update
        Profile.findByIdAndUpdate(
            {user: req.user.id},
            {$set: profileFields},
            {new: true}
        )
        .then(profile => res.json(profile));
    }else{
        //create
        //check to see if handle exsists
        Profile.findOne({ handle: profileFields.handle}).then(profile =>{
            if(profile){
                errors.handle = 'This handle already exists';
                res.status(400).json(errors);
            }
        //if it doesnt then save profile
        new Profile(profileFields).save().then(profile => res.json(profile));
        });
    }
});
}
);

module.exports = router;