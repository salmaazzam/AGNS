const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const VideoSchema = new Schema({

    link:{
        type:String
    },
    description:{
        type:String
    }


}, { timestamps: true });

const Video = mongoose.model('Video', VideoSchema);
module.exports = Video;
