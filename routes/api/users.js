const express = require('express');
const router = express.Router();

//Route: GET request to api/users/test
//this is a public route

router.get('/test', (req ,res) => res.json({msg: "users WORKS!"}));

module.exports = router;