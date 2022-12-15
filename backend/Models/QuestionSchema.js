const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const QuestionSchema = new Schema({
    Question:{
        type: String
    },
    Answers:{
        type:Array,
        items:{type:String},
        minItems:4,
        maxItems:4
    },
    CorrectAnswer:{
        type: Number,
    }

    

}, { timestamps: true });

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
