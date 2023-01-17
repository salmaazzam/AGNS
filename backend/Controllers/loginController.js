const nodemailer = require("nodemailer")
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt= require('bcrypt')
const Admin=require('../Models/AdminSchema')
const User = require('../Models/IndividualTraineeSchema')
const Instructor = require('../Models/InstructorSchema') 
const Trainee = require('../Models/CorporateTraineeSchema')
const jwt = require('jsonwebtoken')

const createToken = ({_id}) => {
  return jwt.sign({_id}, process.env.SECRET,{ expiresIn:'3d'})
}

const loginUser = async(req, res) => {
    const {username, password}= req.body
    var type;
    try{
      if(!username || !password){
        throw Error("All fields must be filled")
      }

      const instructor = await Instructor.findOne({username:username})
      if(instructor){ //username in instructor
        const match= await bcrypt.compare(password, instructor.password) 
        if(!match){
          throw Error("Incorrect password instructor")
        }
        else{
          type=1
        //create token
        const token = createToken(instructor._id)
        res.status(200).json({username,type, token})

        }
      }
      else{
        const indivTrainee =await User.findOne({username:username})
        if(indivTrainee){ //username in instructor
          const match= await bcrypt.compare(password, indivTrainee.password) 
          if(!match){
            throw Error("Incorrect password trainee")
          }
          else{
           type=2
          //create token
          const token = createToken(indivTrainee._id)
          res.status(200).json({username,type, token})

          }
        }
        else{
          const corpTrainee =await Trainee.findOne({username:username})
          if(corpTrainee){ //username in corp trainee
            const match= await bcrypt.compare(password, corpTrainee.password) 
            if(!match){
              throw Error("Incorrect password trainee")
            }
            else{
             type=3
            //create token
            const token = createToken(corpTrainee._id)
            res.status(200).json({username,type, token})
          }
          }
          else{
            const admin =await Admin.findOne({username:username})
            if(admin){
              const match= await bcrypt.compare(password, admin.password)
              if(!match){
                throw Error("Incorrect password admin")
              } 
              else{
                type=4
            //create token
            const token = createToken(admin._id)
            res.status(200).json({username,type, token})

              }
            }
            else{
              throw Error("Incorrect username")

            }
          }
  
        }
  
      }

      //const user= await User.login(username, password) 
      
      //create token
      // const token = createToken(user._id)
      // res.status(200).json({username, token})

    }catch (error){
      res.status(400).json({error: error.message})
    }
}

const signupUser = async(req, res) => {
    const {firstName,lastName, username, email, password, gender}= req.body

    try{
      const user= await User.signup(firstName,lastName, username, email, password, gender)

      //create token
      const token = createToken(user._id)

      res.status(200).json({username, token})
    } catch (error){
      res.status(400).json({error: error.message})
    }
    
}

let transporter = nodemailer.createTransport
({
    service:"gmail",
    auth:{
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASS,
    }
})

const forgetPass = async (req, res) => {
  const { email } = req.body
  if(!email){
    return res.status(400).json({ error: 'Please Write your email'})
  }
  try {
    const person= await User.findOne({email:email}) || Instructor.findOne({email:email}) || Trainee.findOne({email:email})
    if(person){
      let mailOptions=
      {
        from:process.env.AUTH_EMAIL,
        to:email,
        subject:"Reset password",
        html : `<p>You have forgotten your password ? Don't worry, You can reset your password from here easily</p>            <p>This link<b> expires in 60 minutes</b>.</p> 
            <a href="http://localhost:3000/resetpass">Reset password</a>` 
      }
      transporter.sendMail(mailOptions,(error,data) =>{
        if (error)
          return res.json(error)
      })
      res.status(200).json({email})
    }
    else{
      res.status(404).json({error:"Invalid email"})
    }
  } catch (error) {
    res.status(404).json(error)
  }
}

const changePass = async (req, res) => {
  
  const { username } = req.body
  const{password}= req.body

  if(!username || !password)
  {
    return res.status(400).json({ error: 'Please fill in all fields'})
  }

try{
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const indTrainee = await User.findOne({username:username});
  const instructor = await Instructor.findOne({username:username});
  const coTrainee = await Trainee.findOne({username:username});
  if(instructor){
    const inst= await Instructor.findOneAndUpdate({username:username},{password: hashedPassword})
    res.status(200).json(inst,{type:1})
  }
  if(indTrainee){
    const indtrainee= await User.findOneAndUpdate({username:username},{password: hashedPassword})
    res.status(200).json(indtrainee,{type:1})
  }
  if(coTrainee){
    const cotrainee= await Trainee.findOneAndUpdate({username:username},{password: hashedPassword})
    res.status(200).json(cotrainee,{type:1})
  }
   
  if (!instructor && !indTrainee && !coTrainee) {
    return res.status(400).json({error: 'No such user'})
  }
  
}catch (error){
  res.status(400).json({error: error.message})
}
}

const resetPass = async (req, res) => {
  
  const { email } = req.body
  const{password}= req.body

  if(!email || !password)
  {
    return res.status(400).json({ error: 'Please fill in all fields'})
  }

try{
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const indTrainee = await User.findOne({email:email});
  const instructor = await Instructor.findOne({email:email});
  const coTrainee = await Trainee.findOne({email:email});
  if(instructor){
    const inst= await Instructor.findOneAndUpdate({email:email},{password: hashedPassword})
    res.status(200).json(inst)
  }
  if(indTrainee){
    const indtrainee= await User.findOneAndUpdate({email:email},{password: hashedPassword})
    res.status(200).json(indtrainee)
  }
  if(coTrainee){
    const cotrainee= await Trainee.findOneAndUpdate({email:email},{password: hashedPassword})
    res.status(200).json(cotrainee)
  }
   
  if (!instructor && !indTrainee && !coTrainee) {
    return res.status(400).json({error: 'No such user'})
  }
  
}catch (error){
  res.status(400).json({error: error.message})
}
}



module.exports = {signupUser, loginUser, forgetPass, changePass, resetPass}

module.exports = {signupUser, loginUser, forgetPass, changePass, resetPass}