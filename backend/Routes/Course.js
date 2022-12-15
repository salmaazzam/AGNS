const express = require("express");
const router = express.Router();
const { getCreate, getCourses, searchCourses, createCourse, getMyCourses, searchMyCourses, filterPrice, filterCourses, filterMyPrice, addPreview } = require('../Controllers/courseController')


router.get("/", getCourses) 

router.post("/", searchCourses) 

router.post("/filterPrice", filterPrice)

router.get("/filterPrice", filterMyPrice)

router.post("/filterMyPrice", filterMyPrice)

router.get("/filterMyPrice", filterPrice)

router.get('/:id/create', getCreate)

router.post("/:id/create", createCourse)

router.get("/search", getMyCourses )

router.post("/search", searchMyCourses )

router.get("/filter", getMyCourses )

router.post("/filter", filterCourses)

router.get("/get", getMyCourses )

router.post("/get", getMyCourses )

router.get("/addPreview", addPreview )

router.post("/addPreview",addPreview )




module.exports = router;