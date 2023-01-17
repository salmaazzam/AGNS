const express = require("express");
const router = express.Router();
const { getCreate, getCourses, searchCourses, createCourse, getMyCourses,getIndivCourses, searchMyCourses, filterPrice, 
    filterCourses, PopularCourses,filterMyPrice, addPreview, AddRatings,AddPromotion, getRatings, insertCourse,
    registerCourse,insertSubtitle,getACourse,getSubtitles, InMyCourses,MyProgress,SolveCurrExercise,getCurrExercise } = require('../Controllers/courseController')

const requireAuthInstructor = require('../middleware/requireAuthInstructor')
const requireAuthIndividual = require("../middleware/requireAuthIndividual")


router.get("/", getCourses) 

router.get("/popularCourses",PopularCourses)

router.post("/progress",requireAuthIndividual,MyProgress)

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

router.get("/getSubtitle",getSubtitles)

router.post("/insertsubtitle", insertSubtitle)

router.post("/getACourse",getACourse)

router.post("/insertpromotion", AddPromotion)

router.get("/insert", insertCourse)

router.post("/insert",requireAuthInstructor ,insertCourse)

router.post("/canIRegister",requireAuthIndividual,InMyCourses)

router.post("/register",requireAuthIndividual ,registerCourse)

router.post("/getEx",requireAuthIndividual,getCurrExercise)

router.post("/solve",requireAuthIndividual,SolveCurrExercise)


module.exports = router;