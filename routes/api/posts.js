const express = require('express');
const router = express.Router();

//Route: GET request to api/posts/test
//this is a public route
router.get('/test', (req ,res) => res.json({msg: "posts WORKS!"}));

module.exports = router;