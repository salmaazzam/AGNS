const express = require("express");
const router = express.Router();
const { getCreate, getCourses, searchCourses, createCourse, getMyCourses,getIndivCourses, searchMyCourses, filterPrice, 
    filterCourses, filterMyPrice, addPreview, AddRatings,AddPromotion, getRatings, insertCourse,registerCourse,insertSubtitle,getACourse } = require('../Controllers/courseController')

const requireAuthInstructor = require('../middleware/requireAuthInstructor')
const requireAuthIndividual = require("../middleware/requireAuthIndividual")


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

router.get("/getIndividualCourses",requireAuthIndividual , getIndivCourses )

router.get("/addPreview", addPreview )

router.post("/addPreview",addPreview )

router.get("/myRatings",getRatings)

router.post("/myRatings",getRatings)

router.get("/ratings",AddRatings)

router.post("/ratings",AddRatings)

router.post("/insertsubtitle", insertSubtitle)

router.post("/getACourse",getACourse)

router.post("/insertpromotion", AddPromotion)

router.get("/insert", insertCourse)

router.post("/insert",requireAuthInstructor ,insertCourse)

//router.get("/register",requireAuthInstructor ,registerCourse)
//router.post('/register',registerCourse)
router.post("/register",requireAuthInstructor ,registerCourse)

module.exports = router;