const Exercise = require("../Models/ExerciseSchema");
const Course = require("../Models/CourseSchema");
const Question = require("../Models/QuestionSchema")
const mongoose = require('mongoose');



const CreateEx = async(req,res)=>{
    const {CID}= req.body
    const Answers= []
    try{
        const exercise = await Exercise.create({CID, Answers})
        const {NumOfExercises}= await Course.findById(CID);
        NumOfExercises++;
        const course = await Course.findByIdAndUpdate(CID,NumOfExercises)
        res.status(200).json(exercise)
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
}

const AddQuestion = async (req, res) => {
  const {question, answer1, answer2, answer3, answer4, solution ,ExId} = req.body
  const answers = [answer1,answer2,answer3,answer4]

  try {
    const newQ = await Question.create({Question:question, Answers: answers, CorrectAnswer:solution})
    const exercise = await Exercise.findOneAndUpdate({_id: ExId}, {$push:{Exercise:newQ}})
    res.status(200).json(exercise)

}
catch(error){
    res.status(400).json({ error: error.message })
}
  }

module.exports = {
        CreateEx,
        AddQuestion
  } 