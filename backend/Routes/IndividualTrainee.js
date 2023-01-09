const express = require("express");
const router = express.Router();
const requireAuthIndividual = require("../middleware/requireAuthIndividual")
const {getIndividual } = require('../Controllers/individualController')


router.get("/", (req, res)=>{
    res.status(200).send("Welcome Individual Trainee");
});


router.get("/yarab2", requireAuthIndividual, getIndividual)





module.exports = router;