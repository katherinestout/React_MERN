const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
       // required: true,
       // max: 40
    },
    text: {
        type: String,
        required: true
    },
    name:{
        type: String
        
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