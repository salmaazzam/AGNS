const express = require("express");
const router = express.Router();
const IndividualTrainee = require("../Models/IndividualTraineeSchema");

router.get("/", (req, res)=>{
    res.status(200).send("Welcome Individual Trainee");
});



module.exports = router;