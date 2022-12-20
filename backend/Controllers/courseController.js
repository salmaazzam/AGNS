const Course = require('../Models/CourseSchema');
const Instructor = require('../Models/InstructorSchema');
const mongoose = require('mongoose');
const Subtitle = require('../Models/SubtitleSchema');


//for anyone to view all courses
const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1})
  
    res.status(200).json(courses)}



    
//for Instructor to createCourse
const createCourse = async(req,res) => {
    const { id } = req.body
    const {title, price, shortSummary, subtitles, InstructorName, InstructorId, totalHours , subject} = req.body

    let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!price) {
    emptyFields.push('price')
  }
  if (!shortSummary) {
    emptyFields.push('shortSummary')
  }
  if (!subtitles) {
    emptyFields.push('subtitles')
  }
  if (!InstructorName) {
    emptyFields.push('InstructorName')
  }
  if (!InstructorId) {
    emptyFields.push('InstructorId')
  }
  if (!totalHours) {
    emptyFields.push('totalHours')
  }
  if (!subject) {
    emptyFields.push('subject')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Instructor'})
  }

  try {
    const course = await Course.create({ title,price,shortSummary, subtitles,InstructorName,InstructorId, totalHours, subject })
    res.status(200).json(course)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}


//for Instructor to view his courses
const getMyCourses = async (req, res) => {
    const { id } = req.body
    // console.log(id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Instructor'})
      }
    const courses = await Course.find({InstructorId: id}).sort({createdAt: -1})
    // console.log(courses)
    res.status(200).json(courses)}


    const searchMyCourses = async (req, res) => {
        const { id } = req.body
        const { info } = req.body
    
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such Instructor'})
          }
        const courses = await Course.find({InstructorId: id, $or:[{title: info },{subject: info}]}).sort({createdAt: -1})
          // console.log(courses)
        res.status(200).json(courses)}


        const searchCourses = async (req, res) => {
            const { info } = req.body

            const coursesTitle = await Course.find({$or:[{title: info },{InstructorName: info}]}).sort({createdAt: -1})
            
            res.status(200).json(coursesTitle)}

            const filterPrice = async (req, res) => {
              const { max , min } = req.body
              const maxnum = Number(max);
              const minnum = Number(min);
              let emptyFields =[]
              let coursesTitle=[];
              if(!max){
                emptyFields.push('max')
              }
              if(!min){
                emptyFields.push('min')
              }
              if(emptyFields.length==1 && emptyFields[0]==='max'){
                coursesTitle = await Course.find({price : {$gt: minnum}})
                console.log("all> minimum")
              }  
              if(emptyFields.length==1 && emptyFields[0]==='min'){
                coursesTitle = await Course.find({price : {$lt: maxnum}})
                console.log("all<max")
              }
              if(emptyFields.length==0 ){
                coursesTitle = await Course.find({$and :[{price:{$gt:minnum}},{price:{$lt:maxnum}}]})
                console.log("all in between")
                console.log(coursesTitle);
              }
              if(emptyFields.length==2 ){
                console.log("no max or min given")
                return res.status(400).json({ error: 'Please fill in all fields', emptyFields })

              }
              // const coursesTitle = await Course.findAll({price: price}).sort({createdAt: -1})
              
              res.status(200).json(coursesTitle)
            
            
            }

            const filterMyPrice = async (req, res) => {
              const { max , min, id } = req.body
              const maxnum = Number(max);
              const minnum = Number(min);
              let emptyFields =[]
              let coursesTitle=[];
              if(!max){
                emptyFields.push('max')
              }
              if(!min){
                emptyFields.push('min')
              }
              if(emptyFields.length==1 && emptyFields[0]==='max'){
                coursesTitle = await Course.find({price : {$gt: minnum}})
              }  
              if(emptyFields.length==1 && emptyFields[0]==='min'){
                coursesTitle = await Course.find({price : {$lt: maxnum}})
              }
              if(emptyFields.length==0 ){
                coursesTitle = await Course.find({$and :[{price:{$gt:minnum}},{price:{$lt:maxnum}}, {InstructorID:id}]})
              }
              if(emptyFields.length==2 ){
                return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
              }
              // const coursesTitle = await Course.findAll({price: price}).sort({createdAt: -1})
              
              res.status(200).json(coursesTitle)
            
            
            }

              const filterCourses = async (req, res) => {
                const { sub } = req.body
    
                const coursesTitle = await Course.find({subject :sub}).sort({createdAt: -1})
                
                res.status(200).json(coursesTitle)}

                const getCreate = async (req, res) => {
      
                  res.status(200).json({message: " wtf"})
                }

const addPreview = async(req,res)=>{
  const {CID, prevLink} = req.body
  const embeddedLink = prevLink.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");
  // console.log(prevLink);
  // console.log(embeddedLink);
  const course = await Course.findOneAndUpdate({_id : CID}, {preview: embeddedLink})
  if (!course) {
    return res.status(400).json({error: 'No such course'})
  }

  res.status(200).json(course)

}
const getRatings = async(req,res)=>{
  const {id} = req.body
  try{
    const rating = await Course.find({_id:id}, {ratings:1})
    res.status(200).json(rating)
  }
  catch(error){
    return res.status(400).json({error: error.message})
  }
}

const AddRatings = async(req,res)=>{
  const{id, ratings}= req.body

  try{
    const course = await Course.findOneAndUpdate({_id: id}, {$push:{ratings}})
    res.status(200).json(course);
  }
  catch(error){
    return res.status(400).json({error: error.message})
  }
}

//subtitle insertion need course id subtitle video hours desc
const insertSubtitle =async(req,res) =>{
  const {CID, subtitle, video, hours, description } = req.body
  let emptyFields = []


  if (!CID) {
    emptyFields.push('CID')
  }
  if (!subtitle) {
    emptyFields.push('subtitle')
  }
  if (!video) {
    emptyFields.push('video')
  }
  if (!hours) {
    emptyFields.push('hours')
  }
  if (!description) {
    emptyFields.push('description')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  if (!mongoose.Types.ObjectId.isValid(CID)) {
    return res.status(404).json({error: 'No such Course'})
  }
  const Subtitle1=await Subtitle.create({subtitle,video,description, hours})

  try {
    const course = await Course.findOneAndUpdate({_id: CID}, {$push:{subtitles:Subtitle1}})
    res.status(200).json(course)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}


const insertCourse = async(req,res) => {
  const { id } = req.body
  const {title, price, shortSummary, InstructorName, InstructorId , subject} = req.body
  const subtitles = [];

  // console.log("entered funccc")
  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!price) {
    emptyFields.push('price')
  }
  if (!shortSummary) {
    emptyFields.push('shortSummary')
  }
  if (!InstructorName) {
    emptyFields.push('InstructorName')
  }
  if (!InstructorId) {
    emptyFields.push('InstructorId')
  }
  if (!subject) {
    emptyFields.push('subject')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Instructor'})
  }

  try {
    const course = await Course.create({ title,price,shortSummary,InstructorName,InstructorId, subject, subtitles })
    
    res.status(200).json(course)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}




module.exports = 
{ getCourses, 
  createCourse, 
  getMyCourses, 
  searchMyCourses, 
  searchCourses,
  filterPrice,
  getCreate,
  filterCourses,
  filterMyPrice,
  addPreview,
  AddRatings, 
  getRatings,
  insertCourse,
  insertSubtitle
};