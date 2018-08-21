const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/Post');

//Profile model
const Profile = require('../../models/Profile');

//validation
const validatePostInput = require('../../validation/post');

//Route: GET request to api/posts/test
//this is a public route
router.get('/test', (req ,res) => res.json({msg: "posts WORKS!"}));


//GET api/posts
//public access
//organize by date

router.get('/', (req, res) => {
    Post.find()
    .sort({date: -1})
    .then(posts => res.json (posts))
    .catch(err => res.status(404).json({nopostsfound:'no posts found with that id' }));
});

//GET api/posts/:id
//public access
//get posts by id

router.get('/:id', (req,res) => {
    Post.findById(req.params.id)
    .then(post => res.json (post))
    .catch(err => res.status(404).json({nopostfound:'no post found with that id' })
);
});



//create a post
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

//Delete route
//DELETE api/posts:id
//private access

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id)
          .then(post => {
            // Check for post owner
            if (post.user.toString() !== req.user.id) {
              return res
                .status(401)
                .json({ notauthorized: 'User not authorized' });
            }
  
            // Delete
            post.remove().then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      });
    }
  );
  

module.exports = router;