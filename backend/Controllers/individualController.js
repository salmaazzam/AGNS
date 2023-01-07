const IndividualTrainee = require('../Models/IndividualTraineeSchema');
const mongoose = require('mongoose')
const bcrypt= require('bcrypt')
const Course = require('../Models/CourseSchema');


// fro testing 
const AddCourses = async(req,res)=>{
    const{id, courseid}= req.body
  
    try{
      const course = await Course.findById(courseid)
      const indiv = await IndividualTrainee.findOneAndUpdate({_id: id}, {$push:{courses:course}})
      res.status(200).json(indiv);
      //res.status(200).json(course)
    }
    catch(error){
      return res.status(400).json({error: error.message})
    }
  }

//get a specific indiv trainee
const getIndiv = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such Individual Trainee'})
    }

    //this returns all the info of the indiv with this id
    const{courses} = await IndividualTrainee.findById(id);
    //const courses=individualTrainee.courses
    res.status(200).json(courses)
  }



  module.exports = {
    getIndiv,
    AddCourses
  }