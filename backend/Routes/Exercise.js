const express = require("express");
const router = express.Router();
const {CreateEx,
    AddQuestion} = require('../Controllers/exerciseController');

router.get("/", CreateEx )

router.post("/",CreateEx)

router.get("/question", AddQuestion)

router.post("/question",AddQuestion)

module.exports = router;