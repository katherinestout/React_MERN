const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name:{
        type: String
        
    },
    handle: {
        type: String,
        ref: 'profile'
      
    },

    likes: [
            {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }
    ]
});
module.exports = Post = mongoose.model('post', PostSchema);