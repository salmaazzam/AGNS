const express = require("express");
const router = express.Router();
const { getCreate, getCourses, searchCourses, createCourse, getMyCourses, searchMyCourses, filterPrice } = require('../Controllers/courseController')


router.get("/", getCourses) 

router.post("/", searchCourses) 

router.post("/filterPrice", filterPrice)

router.get('/:id/create', getCreate)

router.post("/:id/create", createCourse)

router.get("/:id", getMyCourses )

router.post("/:id", searchMyCourses )


module.exports = router;