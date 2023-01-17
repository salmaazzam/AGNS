const express = require("express");
const router = express.Router();
const {AcceptReq,allReqCourses, getCorporateTrainees,requestCourse, getCorporateTrainee, createCorporateTrainee, deleteCorporateTrainee, updateCorporateTrainee, setCountry} = require('../Controllers/CorporateTraineeController')
const requireAuthCorporate = require("../middleware/requireAuthCorporate")
//const CorporateTrainee = require("../Models/CorporateTraineeSchema");



router.get("/", getCorporateTrainees) //("/", name of the function that gets the admins);

//router.get("/", allReqCourses)
router.get("/allrequestcourse", allReqCourses)

router.get("/:id", getCorporateTrainee)

router.post("/", createCorporateTrainee)

router.delete("/:id", deleteCorporateTrainee)

router.patch("/:id", updateCorporateTrainee)

router.post("/country", setCountry)

router.post("/requestcourse",requireAuthCorporate, requestCourse)

router.post("/acceptReq",AcceptReq)


/*async function changeCountry(Country){
    var { MongoClient }= require('mongodb');
    var uri = "mongodb+srv://aclProj:ackProjPassword@cluster0.hjrz1bm.mongodb.net/ProjDB?retryWrites=true&w=majority";
    var client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    await client.connect();
   


    client.close();
}


router.get("/", (req, res)=>{
    res.status(200).send("Welcome Corporate Trainee");
});

router.get("/changeCountry", (req, res)=>{
    res.status(200).send("hiiii change country");
});


router.post("/changeCountry", (req, res)=>{
    
});*/


module.exports = router;