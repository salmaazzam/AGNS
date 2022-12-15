const mongoose = require('mongoose');
const Course = require ('./CourseSchema');
const Schema = mongoose.Schema;
const bcrypt= require('bcrypt')
const validator= require('validator')
const Trainee = require('../Models/CorporateTraineeSchema')


const InstructorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true
  },
  country:{
    type:String,
    required:  false
  },
  biorgaphy:{
    type:String
  },
  rating:{
    type:Array,
    items:{type: Number}
  },
  reviews:{
    type:Array,
    items:{type: String}
  }
  
}, { timestamps: true });


InstructorSchema.statics.login = async function(username, password)
{
  if(!username || !password){
    throw Error("All fields must be filled")
  }
  const user= await this.findOne({ username })
  if(!user) {
    const trainee= await Trainee.login(username, password)
    return trainee 
    //throw Error("Incorrect username");
  }
  else{
  const match= await bcrypt.compare(password, user.password)
  if(!match){
    throw Error("Incorrect password instructor")
    
  }

  return user
}

}

const Instructor = mongoose.model('Instructor', InstructorSchema);
module.exports = Instructor;