const express= require('express')

//controllers

const {signupUser,loginUser, forgetPass,changePass, resetPass}= require('../Controllers/loginController')

const router= express.Router()

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

router.post('/forgetpass', forgetPass)

router.patch('/changepass', changePass)

router.patch('/resetpass', resetPass)

module.exports =router