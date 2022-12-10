const express = require("express");
const router = express.Router();
const { getCreate, getCourses, searchCourses, createCourse, getMyCourses, searchMyCourses, filterPrice, filterCourses } = require('../Controllers/courseController')


router.get("/", getCourses) 

router.post("/", searchCourses) 

router.post("/filterPrice", filterPrice)

router.get('/:id/create', getCreate)

router.post("/:id/create", createCourse)

router.get("/search", getMyCourses )

router.post("/search", searchMyCourses )

router.get("/filter", getMyCourses )

router.post("/filter", filterCourses)


module.exports = router;