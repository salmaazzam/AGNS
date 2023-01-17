const express = require("express");
const router = express.Router();
//const Report = require("../Models/ReportSchema");
const {addReport,getReports,setStatus,getMyReports } =require('../Controllers/reportController');




router.post("/",addReport)
router.get("/allreports",getReports)
router.post("/updatereport",setStatus)
router.get("/getMyReports", getMyReports)







module.exports = router;