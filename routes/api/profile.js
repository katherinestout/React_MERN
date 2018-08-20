const express = require('express');
const router = express.Router();

//Route: GET request to api/profile/test
//this is a public route

router.get('/test', (req ,res) => res.json({msg: "profile WORKS!"}));

// Route that gets the current users profile

module.exports = router;