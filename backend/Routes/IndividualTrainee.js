const express = require("express");
const router = express.Router();
const requireAuthIndividual = require("../middleware/requireAuthIndividual")
const {getIndividual,RequestRefund } = require('../Controllers/individualController')


router.get("/", (req, res)=>{
    res.status(200).send("Welcome Individual Trainee");
});


router.get("/yarab2", requireAuthIndividual, getIndividual)

router.post("/refund",requireAuthIndividual,RequestRefund)



module.exports = router;