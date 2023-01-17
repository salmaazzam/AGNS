const Exercise = require("../Models/ExerciseSchema");
const Course = require("../Models/CourseSchema");
const Question = require("../Models/QuestionSchema")
const mongoose = require('mongoose');



const CreateEx = async(req,res)=>{
    const {CID}= req.body
    const Answers= []
    try{
        const exercise = await Exercise.create({CID, Answers})
        var {NumOfExercises}= await Course.findById(CID);
        NumOfExercises++;
        await Course.updateOne({_id:CID},{$set :{NumOfExercises:NumOfExercises}});
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

  const SubmitExercise = async(req,res)=>{
    const{_id}= req.body
    const exercise = await Exercise.findById(_id);
    const course = await Course.findByIdAndUpdate({_id:exercise.CID},{$push:{exercises:exercise}})
    res.status(200).json(course)

  }

module.exports = {
        CreateEx,
        AddQuestion,
        SubmitExercise
  } 