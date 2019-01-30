const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

//routes
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');

const app = express();

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connecting to MongoDB by using Mongoose
mongoose.connect(db).then(() => console.log('MongoDB is Connected!')).catch(err => console.log(err));

//app.get('/', (req, res) => res.send('Hello'));

//Passport Middleware
app.use(passport.initialize());
//Passport Config, jwt strategy
require('./config/passport')(passport);

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Server static assets if in production
//Check to see if on server, on heroku
if(process.env.NODE_ENV === 'production'){
    //set a static folder
    app.use(express.static('client/build'));
    //route
    //for any route that gets hit we're going to load the react index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));