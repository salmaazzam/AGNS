const { links } = require('express/lib/response');
const mongoose = require('mongoose');
const Exercise = require('./ExerciseSchema');
const Instructor = require('./InstructorSchema');
const Subtitle = require('./SubtitleSchema');
const Schema = mongoose.Schema;
const Question =require('./QuestionSchema')
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
    type: Number

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
    items:{type:Subtitle}
  },
  exercises:{
    type:Array,
    items:{type:Exercise}
  },
  reviews:{
    type: Array,
    items:{type: String}
  },
  preview :{
    type: String
  },
  promotion:{
    percentage: {
      type: Number
    }
    ,
    duration:{
      type:Number
    },
    start:{
      type: Date
    }
  },
  Exam: {
      type:Array,
      items:{type:Question}

  },
  
  NumOfExercises:{
    type:Number,
    default: 0
  },
  NumOfExercisesDone:{
    type:Number,
    default: 0
  },
  enrolled:{
    type:Number,
    default:0
  },
  averageRating:{
    type:Number,
    defaut:0
  },
  
    videos:{
      type:Array,
      items:{type:String}
    }
  
}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;