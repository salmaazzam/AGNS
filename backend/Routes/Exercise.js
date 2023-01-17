const express = require("express");
const router = express.Router();
const {CreateEx, AddQuestion,SubmitExercise} = require('../Controllers/exerciseController');

router.get("/", CreateEx )

router.post("/",CreateEx)

router.get("/question", AddQuestion)

router.post("/question",AddQuestion)

router.post("/submit",SubmitExercise)

module.exports = router;