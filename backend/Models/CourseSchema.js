const { links } = require('express/lib/response');
const mongoose = require('mongoose');
const Exercise = require('./ExerciseSchema');
const Instructor = require('./InstructorSchema');
const Video = require('./videoSchema');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required : true
  },
  shortSummary: {
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
    type:Array,
    items:{type: Number}
  },
  subject :{
    type: String,
    required : true
  },
  subtitles :{
    type:Array,
    items:{type:Video}
  },
  exercises:{
    type:Array,
    items:{type:Exercise}
  },
  review:{
    type:String
  },
  preview :{
    type: String
  }



}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
