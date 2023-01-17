const mongoose = require('mongoose');   
const Schema = mongoose.Schema;


const ReportSchema = new Schema({
    type:{
        type:String,
        required: true,
        enum : ['technical','financial','other'], 
    },
    problem:{
        type:String,
        required: true
    },
    status:{
        type:String,
        enum : ['unseen','resolved','pending'],
        default: 'unseen'
        
    },
    userID:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    courseid:{
        type:String,
        required:true
    },
    comments:{
        type:Array,
        items:{type:String}

    },
    adminReply:{
        type:String,
    }

}, { timestamps: true });

const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;
