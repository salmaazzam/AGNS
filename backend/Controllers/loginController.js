const nodemailer = require("nodemailer")
require('dotenv').config();

const User = require('../Models/IndividualTraineeSchema')
const Instructor = require('../Models/InstructorSchema') 
const Trainee = require('../Models/CorporateTraineeSchema')
const jwt = require('jsonwebtoken')

const createToken = ({_id}) => {
  return jwt.sign({_id}, process.env.SECRET,{ expiresIn:'3d'})
}

const loginUser = async(req, res) => {
    const {username, password}= req.body

    try{
      const user= await User.login(username, password) 
      
      //create token
      const token = createToken(user.id)

      res.status(200).json({username, token})
    } catch (error){
      res.status(400).json({error: error.message})
    }
}

const signupUser = async(req, res) => {
    const {firstName,lastName, username, email, password, gender}= req.body

    try{
      const user= await User.signup(firstName,lastName, username, email, password, gender)

      //create token
      const token = createToken(user.id)

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
            <a href="https://localhost:3000/resetpass">Reset password</a>` 
      }
      transporter.sendMail(mailOptions,(error,data) =>{
        if (error)
          return res.json(error)
      })
      res.status(200).json({success:"An email is sent successfully"})
    }
    else{
      res.status(404).json({error:"Invalid email"})
    }
  } catch (error) {
    res.status(404).json(error)
  }
}

module.exports = {signupUser, loginUser, forgetPass}