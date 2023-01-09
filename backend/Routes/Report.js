const express = require("express");
const router = express.Router();
const Report = require("../Models/ReportSchema");
const {addReport} =require('../Controllers/reportController');
const { getReports } = require("../Controllers/reportController");




router.post("/",addReport)
router.get("/allreports",getReports)







module.exports = router;