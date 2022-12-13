const express= require('express')

//controllers

const {signupUser,loginUser, forgetPass}= require('../Controllers/loginController')

const router= express.Router()

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

router.post('/forgetpass', forgetPass)

module.exports =router