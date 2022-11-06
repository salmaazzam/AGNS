const mongoose = require('mongoose');
const Course = require ('./CourseSchema');
const Schema = mongoose.Schema;


const InstructorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  country:{
    type:String,
    required:  false
  }
  
}, { timestamps: true });

const Instructor = mongoose.model('Instructor', InstructorSchema);
module.exports = Instructor;
