const mongoose = require('mongoose');
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
  }
}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
