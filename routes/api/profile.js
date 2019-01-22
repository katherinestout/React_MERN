const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load validation
const validateProfileInput = require('./../../validation/profile');
//const validateLoginInput = require('./../../validation/login');

// Bring in profile model
const Profile = require('../../models/Profile');
// Bring in user profile
const User = require('../../models/User');

//Route: GET request to api/profile/test
//this is a public route

router.get('/test', (req ,res) => res.json({msg: "profile WORKS!"}));

router.get('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const errors = {};
  
      Profile.findOne({ user: req.user.id })
        .populate('user', 'name')
        .then(profile => {
          if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            return res.status(404).json(errors);
          }
          res.json(profile);
        })
        .catch(err => res.status(404).json(err));
    }
  );

//GET request route: api/profile/handle/:hanlde
//get profile by handle
//Public access route

router.get('/handle/:handle', (req, res) => {
    const errors = {};
    //match and grab handle from db
    Profile.findOne({ handle: req.params.handle })
    .populate('user')
    .then (profile => {
        if(!profile){
            errors.noprofile = 'There is no profile for this user!!';
            res.status(404).json(errors);
            console.log("help");

        }
        res.json(profile); 
    }).catch(err => res.status(404).json(err));
    console.log("helpdddd");

    });

//GET request route: api/profile/user/:user_id
//get profile by user id
//Public access route

router.get('/user/:user_id', (req, res) => {
    const errors = {};
    //match and grab handle from db
    Profile.findOne({ user: req.params.user_id })
    .populate('user')
    .then (profile => {
        if(!profile){
            errors.noprofile = 'There is no profile for this user!!';
            res.status(404).json(errors);

        }
        res.json(profile); 
    }).catch(err => 
        res.status(404).json({profile: 'There is no profile sorry.'})
    );
    });

//GET request route: api/profile/all
//get profile by user id
//Public access route

router.get('/all', (req, res) => {
    const errors ={};
    //match and grab handle from db
    Profile.find()
   
    .populate('user')
    .then (profiles => {
        if(!profiles){
            errors.noprofile = 'There are no profiles';
            return res.status(404).json(errors);
        }
        res.json(profiles);
    })
    .catch(err =>
    res. status(404).json({profile: 'No profiles sorry'})
);
}); 






// Route that creates user profile
//private access route
//POST api/profile

router.post('/', passport.authenticate('jwt', {session: false}), 
(req, res) => {

const{ errors, isValid} = validateProfileInput(req.body);

//check validation
if(!isValid){
    //return any errors with status
    return res.status(400).json(errors);
}

  //GET fields
  //filling profile fields object
const profileFields = {};
profileFields.user = req.user.id;
if(req.body.handle) profileFields.handle = req.body.handle;
//if(req.body.instagram) profileFields.handle = req.body.instagram;
if(req.body.bio) profileFields.bio = req.body.bio;

//social
profileFields.social = {};
if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
if (req.body.instagram) profileFields.social.instagram = req.body.instagram;



//search for user by id
Profile.findOne({user: req.user.id})
.then(profile => {
    if(profile){
        //if they have a profile then update
        Profile.findOneAndUpdate(
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

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Profile.findOneAndRemove({ user: req.user.id }).then(() => {
        User.findOneAndRemove({ _id: req.user.id }).then(() =>
          res.json({ success: true })
        );
      });
    }
  );

module.exports = router;