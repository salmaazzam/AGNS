const express = require("express");
const router = express.Router();
const {getRefunds} = require('../Controllers/refundController');

router.get("/", getRefunds)


module.exports = router;
