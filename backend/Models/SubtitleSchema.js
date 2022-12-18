const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SubtitleSchema = new Schema({
    subtitle:{
        type:String,
        required : true
    },
    link:{
        type:String
    },
    description:{
        type:String
    },
    hours:{
        type:Number
    }


}, { timestamps: true });

const Subtitle = mongoose.model('Subtitle', SubtitleSchema);
module.exports = Subtitle;
