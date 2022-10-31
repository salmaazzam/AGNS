const express = require("express");
const router = express.Router();
const CorporateTrainee = require("../Models/CorporateTraineeSchema");

async function changeCountry(Country){
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
    
});


module.exports = router;