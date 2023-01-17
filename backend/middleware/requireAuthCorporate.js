const jwt = require('jsonwebtoken')
const CorporateTrainee = require('../Models/CorporateTraineeSchema')

const requireAuthCorporate = async (req,res,next) =>{
    const {authorization} = req.headers //authorization here is a string which is 'Bearer fhjshfvkmlf.3nkvfnfknvk.vkvnjnlrj' so we want the token which is the 2nd part that why we split

    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token= authorization.split(' ')[1]
    // console.log(token)
    try{
        const {_id} = jwt.verify(token, process.env.SECRET) //gets the id from the token
        // req.user= await User.findOne({_id}).select('_id')
        // console.log(_id)
        // console.log(jwt.verify(token, process.env.SECRET))
        // console.log("id^")
        req.user= await CorporateTrainee.findOne({_id})
        // console.log(req.user.name)
        next() //when it goes to the next functions in the userControllers from getUser, createuser and so on
    }
    catch(error){
      console.log(error)
      res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports= requireAuthCorporate