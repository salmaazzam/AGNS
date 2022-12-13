const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt= require('bcrypt')


const CorporateTraineeSchema = new Schema({
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
    required:false
  }

}, { timestamps: true });

CorporateTraineeSchema.statics.login = async function(username, password)
{
  if(!username || !password){
    throw Error("All fields must be filled")
  }
  const user= await this.findOne({ username })
  if(!user) {
    throw Error("Incorrect username");
  }
  const match= await bcrypt.compare(password, user.password)
  if(!match){
    throw Error("Incorrect password")
  }

  return user

}

const CorporateTrainee = mongoose.model('CorporateTrainee', CorporateTraineeSchema);
module.exports = CorporateTrainee;