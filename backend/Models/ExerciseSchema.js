const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Question = require('./QuestionSchema');

const ExerciseSchema = new Schema({

    Exercise:{
        type:Array,
        items:{type:Question}
    }

}, { timestamps: true });

const Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = Exercise;
