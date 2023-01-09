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
    userName:{
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
    }


}, { timestamps: true });

const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;
