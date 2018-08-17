const express = require('express');
const mongoose = require('mongoose');

//routes
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connecting to MongoDB by using Mongoose
mongoose.connect(db).then(() => console.log('MongoDB is Connected!')).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));