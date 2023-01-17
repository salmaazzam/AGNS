
const mongoose = require('mongoose');
const bcrypt= require('bcrypt')

const User = require('../Models/IndividualTraineeSchema')
const Instructor = require('../Models/InstructorSchema') 
const Trainee = require('../Models/CorporateTraineeSchema')
const Refunds= require('../Models/RefundSchema')

const getRefunds= async(req, res) => {
   try{
    const Refunds = await Refunds.find({})
    res.status(200).json(Refunds)
   }
   catch{
    res.status(400).json({error: error.message})
   }

}



module.exports = {getRefunds}

