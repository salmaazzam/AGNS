const IndividualTrainee = require('../Models/IndividualTraineeSchema');
const mongoose = require('mongoose')
const bcrypt= require('bcrypt')
const Course = require('../Models/CourseSchema');
const Refunds = require('../Models/RefundSchema');


// fro testing 
// const AddCourses = async(req,res)=>{
//     const{id, courseid}= req.body
  
//     try{
//       const course = await Course.findById(courseid)
//       const indiv = await IndividualTrainee.findOneAndUpdate({_id: id}, {$push:{courses:course}})
//       res.status(200).json(indiv);
//       //res.status(200).json(course)
//     }
//     catch(error){
//       return res.status(400).json({error: error.message})
//     }
//   }

//get a specific indiv trainee for authentication
const getIndividual = async (req, res) => {
  const { _id } = req.user._id
  // console.log({_id})
  // console.log("id in getInstructir")

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({error: 'No such individual'})
  }

  const individual = await IndividualTrainee.findById(_id)

  if (!individual) {
    return res.status(404).json({error: 'No such individual'})
  }

  res.status(200).json(individual)
}

const refundWallet= async(req,res)=>{
  const {id, amount}= req.body
  const {wallet}= await corporateTrainee.findById(id)
  wallet+=amount
  const user = await corporateTrainee.findByIdAndUpdate(id, wallet)
  res.status(200).json(user)
 }

 const ViewWallet = async(req,res)=>{
  const{_id}= req.user._id
  const {wallet}= await corporateTrainee.findById(id)
  res.status(200).json(wallet)
 }

const RequestRefund = async(req,res )=>{
  const {_id}= req.user._id
  const {cID}=req.body

  const {refunds} = await Refunds.find({});
  
}
  module.exports = {
    getIndividual,
    refundWallet,
    ViewWallet,
    RequestRefund
  }