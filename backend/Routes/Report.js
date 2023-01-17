const express = require("express");
const router = express.Router();
//const Report = require("../Models/ReportSchema");
const {addReport,getReports,setStatus,getMyReports } =require('../Controllers/reportController');

const requireAuthIndividual = require("../middleware/requireAuthIndividual")
const requireAuthCorporate = require("../middleware/requireAuthCorporate")



router.post("/indiv",requireAuthIndividual,addReport)
router.post("/corp",requireAuthCorporate,addReport)
router.get("/allreports",getReports)
router.post("/updatereport",setStatus)
router.get("/getMyReports",requireAuthIndividual, getMyReports)







module.exports = router;