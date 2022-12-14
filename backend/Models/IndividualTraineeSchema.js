const mongoose = require('mongoose');
const { stringify } = require('qs');
const Schema = mongoose.Schema;
const bcrypt= require('bcrypt')
const validator= require('validator')
const Instructor = require('../Models/InstructorSchema'); 
const Course = require('./CourseSchema');

const IndividualTraineeSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: false,
  },
  courses:{
    type:Array,
    items:{type:Course}
  }
}, { timestamps: true });

IndividualTraineeSchema.statics.signup = async function(firstName,lastName, username, email, password, gender) {

  if(!firstName || !lastName || !username || !email || !password || !gender){
    throw Error("All fields must be filled")
  }
  if(!validator.isEmail(email)){
    throw Error("Email is not valid")
  }
  if(!validator.isStrongPassword(password)){
    throw Error("Password is not strong enough")
  }
  const exists= await this.findOne({ email })
  if(exists) {
    throw Error("Email is already in use");
  }
  const salt= await bcrypt.genSalt(10)
  const hash= await bcrypt.hash(password, salt)

  const user= await this.create({firstName,lastName, username, email, password:hash, gender}) //this refers to the user model

  return user
} 

IndividualTraineeSchema.statics.login = async function(username, password)
{
  if(!username || !password){
    throw Error("All fields must be filled")
  }
  const user= await this.findOne({ username })
  if(!user) {
    const instructor= await Instructor.login(username, password);
    return instructor
  }
  else{
    const match= await bcrypt.compare(password, user.password)
   if(!match){
    throw Error("Incorrect password")
  }
  return user
  }
  
}

const IndividualTrainee = mongoose.model('IndividualTraniee', IndividualTraineeSchema);
module.exports = IndividualTrainee;