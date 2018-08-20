const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ProfileSchema = new Schema({
user:{
    type: Schema.Types.ObjectId,
    ref: 'users'
},
handle: {
    type: String,
    required: true,
    max: 40,  
},
    age: {
        type: Date,
    },
    eczema: {
        type: String,
    },
    name:{
        type: String
    }
    
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
