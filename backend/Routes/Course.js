const express = require("express");
const router = express.Router();
const { getCreate, getCourses, searchCourses, createCourse, getMyCourses, searchMyCourses, filterPrice, 
    filterCourses, filterMyPrice, addPreview, AddRatings, getRatings, insertCourse,insertSubtitle } = require('../Controllers/courseController')

const requireAuthInstructor = require('../middleware/requireAuthInstructor')

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

router.get("/get",requireAuthInstructor , getMyCourses )

router.post("/get",requireAuthInstructor ,getMyCourses )

router.get("/addPreview", addPreview )

router.post("/addPreview",addPreview )

router.get("/myRatings",getRatings)

router.post("/myRatings",getRatings)

router.get("/ratings",AddRatings)

router.post("/ratings",AddRatings)

router.post("/insertsubtitle", insertSubtitle)


router.get("/insert", insertCourse)

router.post("/insert",requireAuthInstructor ,insertCourse)

module.exports = router;