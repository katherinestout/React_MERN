const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/Post');

//validation
const validatePostInput = require('../../validation/post');

//Route: GET request to api/posts/test
//this is a public route
router.get('/test', (req ,res) => res.json({msg: "posts WORKS!"}));

// route is POST api/posts
//create post
router.post('/', passport.authenticate('jwt', {session: false}), 
(req, res) => {
    const {errors, isValid} = validatePostInput(req.body);

    //checking validation
    if(!isValid){
        //if errors send 400 with errors
        return res.status(400).json(errors);

    }

    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        user: req.user.id
    });
    newPost.save().then(post => res.json(post));
});

module.exports = router;