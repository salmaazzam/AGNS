const express = require("express");
const router = express.Router();
const Report = require("../Models/ReportSchema");
const {addReport} =require('../Controllers/reportController');
const { getReports } = require("../Controllers/reportController");
const {setStatus} = require("../Controllers/reportController");



router.post("/",addReport)
router.get("/allreports",getReports)
router.post("/updatereport",setStatus)







module.exports = router;