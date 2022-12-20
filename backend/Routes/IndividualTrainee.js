const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth")
const {getIndiv,AddCourses } = require('../Controllers/individualController')


router.get("/", (req, res)=>{
    res.status(200).send("Welcome Individual Trainee");
});

router.get("/:id", getIndiv)
router.post("/:id/Register", AddCourses)





module.exports = router;