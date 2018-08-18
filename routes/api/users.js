const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

//Loading input validation
const validateRegisterInput = require('../../validation/register');

//get user model
const User = require('../../models/User');

//Route: GET request to api/users/test
//this is a public route
router.get('/test', (req ,res) => res.json({msg: "users WORKS!"}));


//get request
//register user route
//public route
router.post('/register', (req, res) => {
//pulling out errors and isvalid from register.js from function we brought in
//name email password
const{errors, isValid} = validateRegisterInput(req.body);
//checking Validation
if(!isValid){
    return res.status(400).json(errors);
}


//first find if email exists
User.findOne({ email: req.body.email })
.then(user => {
    if(user){
        return res.status(400).json({email: 'Email exsists'});
    } else {

//creating a new user, User is model name, pass in data as object
        const newUser = new User({

            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        });
//making a password with salt and hash with bcrypt
//save user
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save().then(user => res.json(user)).catch(err => console.log(err));


            })
        })
    }
})

});

//jwt- json web token
//get api/users/login
//access is public

router.post('/login', (req, res) => {
//send a form that has email and password
const email = req.body.email;
const password = req.body.password;

//finding a user by email
User.findOne({email})
//promise
.then(user => {
//checking for user
    if(!user){
        return res.status(404).json({email: 'User does not exist!'});

    }
//checking password in the db
bcrypt.compare(password, user.password).then(isMatch => {
        if(isMatch){
           //user matched
           //jwt payload
            const payload = { id: user.id, name: user.name};

           //sign token
           //secret key from keys file
           jwt.sign(payload, 
            keys.secretOrKey, 
            {expiresIn: 3600}, 
                (err, token) => {
                    res.json({
                        sucess: true,
                        token: 'Bearer ' + token
                    });
                
            } 
        );
//if password doesn't match...
        } else {
            return res.status(400).json({password: 'Password is incorrect'});
        }
    })

    });
});

//route GET request to api/users/current
//creating a protected route
//returns current user
//PRIVATE access

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
});
});


module.exports = router;