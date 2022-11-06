const mongoose = require('mongoose');
const Instructor = require('./InstructorSchema');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required : true
  },
  shortSummary: {
    type: String,
    required : true
  },
  subtitles: {
    type: String,
    required : true
  }, 
  InstructorName: {
  type: String,
  required: true,
  },
  InstructorId: {
    type: String,
    required: true
  },
  totalHours:{
    type: Number,
    required: true

  },
  ratings:{
    type: Number,
    required:false
  },
  subject :{
    type: String,
    required : true
  }

}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
