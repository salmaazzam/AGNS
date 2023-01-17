const Course = require('../Models/CourseSchema');
const Instructor = require('../Models/InstructorSchema');
const mongoose = require('mongoose');
const Subtitle = require('../Models/SubtitleSchema');
const IndividualTrainee = require('../Models/IndividualTraineeSchema');
const CorporateTrainee = require('../Models/CorporateTraineeSchema');
const User = require('../Models/CorporateTraineeSchema')|| require('../Models/IndividualTraineeSchema');



//for anyone to view all courses
const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1})
  
    res.status(200).json(courses)}

const getACourse=async(req,res)=>{
  const {CID} = req.body;
  const myCourse = await Course.find({_id:CID});
  res.status(200).json(myCourse);
}

    
const AddPromotion = async(req,res)=>{
  console.log("insiddeee")
  const{id, duration, percentage,start}= req.body
  try{
    const course = await Course.findOneAndUpdate({_id: id}, {$set:{"promotion.duration":duration, 
    "promotion.percentage":percentage, "promotion.start":start},
  })
    res.status(200).json(course);
  }
  catch(error){
    return res.status(400).json({error: error.message})
  } 
}

//for Instructor to createCourse
const createCourse = async(req,res) => {
    const { id } = req.body
    const {title, price, shortSummary, subtitles, InstructorName, InstructorId, totalHours , subject} = req.body

    let emptyFields = []
   const {name} = await Instructor.findById(id);
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
      const course = await Course.create({ title,price,shortSummary, subtitles,InstructorName:name,InstructorId, totalHours, subject})   ;
       res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}


//for Instructor to view his courses
const getMyCourses = async (req, res) => {
    const  _id  = req.user._id
 
    const courses = await Course.find({InstructorId:_id})
    // console.log(courses)
    res.status(200).json(courses)
  }

//for individual to view his courses
const getIndivCourses = async (req, res) => {
  const _id = req.user._id
  try{
    const {courses}  = await IndividualTrainee.findById(_id)
    //console.log(courses)
    res.status(200).json(courses)
  }
  catch(error){
    return res.status(400).json({error: error.message})
  }
}





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
    const  {ratings}  = await Course.findById(id)
   // console.log(ratings)
    res.status(200).json(ratings)
  }
  catch(error){
    return res.status(400).json({error: error.message})
  }
}

const AddRatings = async(req,res)=>{
  const{id, ratings}= req.body

  try{

    const {averageRating} =await Course.findById({id})
    const courseold= await Course.findById({id})
    const newRating = ((averageRating*courseold.ratings.length)+ratings)/courseold.ratings.length


    const course = await Course.findOneAndUpdate({_id: id}, {$push:{ratings }})
    const course2 = await Course.findOneAndUpdate({_id: id}, {averageRating:newRating})
    res.status(200).json(course2);
  }
  catch(error){
    return res.status(400).json({error: error.message})
  }
}

//subtitle insertion need course id subtitle video hours desc
const insertSubtitle =async(req,res) =>{
  const {CID, subtitle, video, hours, description } = req.body
  let emptyFields = []
  const link = video.replace("www.youtube.com/watch?v=", "www.youtube.com/embed/");

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
  const Subtitle1=await Subtitle.create({subtitle,link,description, hours})

  try {
    const course = await Course.findOneAndUpdate({_id: CID}, {$push:{subtitles:Subtitle1}})
    res.status(200).json(course)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}

const getSubtitles = async(req,res)=>{
  const{CID}= req.body

  const {subtitles}= await Course.findById(CID)
  res.status(200).json(subtitles)
}


const registerCourse = async(req,res)=>{
  const{_id}=req.user._id
  const {cID}=req.body
  //const { id,cID } = req.user._id
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({error: 'No such individual'})
  }
  const courses =await Course.findById(cID);
  try{
    var {enrolled} =await Course.findById(cID);
    console.log(enrolled);
    enrolled++;
    console.log(enrolled);
    var {moneyOwed}= await Instructor.findById(courses.InstructorId)
    console.log(moneyOwed);
    moneyOwed+=courses.price;
    console.log(moneyOwed);
    const inst= await Instructor.updateOne({_id:courses.InstructorId},{$set :{moneyOwed:moneyOwed}})
    const course= await Course.updateOne({_id:cID},{$set :{enrolled:enrolled}});
    const individual = await IndividualTrainee.findOneAndUpdate(_id , {$addToSet:{courses:courses}})
    res.status(200).json(individual);
  }
  catch(error){
    return res.status(400).json({error: error.message})
  }





}


const insertCourse = async(req,res) => {
  const { _id } = req.user._id
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({error: 'No such instructor'})
  }

  const {name} = await Instructor.findById(_id)
  // console.log(instructor)
  // const {name}= instructor.
  console.log( name )
  const {title, price, shortSummary,subject} = req.body
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
  if (!subject) {
    emptyFields.push('subject')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({error: 'No such Instructor'})
  }

  try {
    const course = await Course.create({ title,price,shortSummary,InstructorName:name,InstructorId:_id, subject, subtitles })
    
    res.status(200).json(course)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}


const PopularCourses = async(req,res) => {
    const popCourses = await Course.find({}).sort({enrolled: -1})
    res.status(200).json(popCourses)
}


const InMyCourses = async(req,res)=>{
  const { _id } = req.user._id
  const {CID}= req.body;
  var result=null;
  const ct= await CorporateTrainee.findById(_id);
  if(ct){
      const {courses} =await CorporateTrainee.findById(_id);
      for(var i=0;i<courses.length;i++){
        console.log(courses[i]._id.valueOf())
        if(courses[i]._id.valueOf() == CID){
          result=courses[i]
        }
      }
  }
  else{
    const it= await IndividualTrainee.findById(_id);
    if(it){
    const {courses} =await IndividualTrainee.findById(_id);
    console.log(courses.length)
    for(var i=0;i<courses.length;i++){
      console.log(courses[i]._id.valueOf())
      if((courses[i]._id.valueOf()) == CID){
        console.log(i +"hiiii")
        result=courses[i]
      }
    }
  }

  }
  res.status(200).json(result);
 
}
const MyProgress= async(req,res) => {
const {_id}= req.user._id
const {CID}= req.body

const {courses} = await IndividualTrainee.findById(_id);

  var progress =0;
  for(var i =0; i<courses.length;i++)
  {
    if(courses[i]._id==CID)
    {
     
    const done = courses[i].NumOfExercisesDone
    const total = courses[i].NumOfExercises
    if(total!=0)
    {
      progress= (done/total)*100
    }
    }
  }
 res.status(212).json(progress)

}

const getCurrExercise =async (req,res)=>{
  const{_id}= req.user._id
  const{CID}= req.body

  const {courses}= await IndividualTrainee.findById(_id)
  for(var i =0; i<courses.length;i++)
  {
    if(courses[i]._id==CID)
    {
      if(courses[i].NumOfExercises==0)
      {
        res.status(200).json("NO EXERCISES")
      }
      else{
        const curr = courses[i].NumOfExercisesDone
        console.log(curr)
        console.log(courses[i].exercises[curr])
        res.status(200).json(courses[i].exercises);
      }
     
      }
  }
  
}

const SolveCurrExercise =async (req,res)=>{
  const{_id}= req.user._id
  const{CID,answer}= req.body

  const {courses}= await IndividualTrainee.findById(_id)
  for(var i =0; i<courses.length;i++)
  {
    if(courses[i]._id==CID)
    {
      if(courses[i].correct==answer)
      {
        res.status(200).json("correct");
      }
      else
      {
        res.status(200).json(courses[i].correct);
      }
      var NumOfExercisesDone = courses[i].NumOfExercisesDone
      NumOfExercisesDone++;
      courses[i].NumOfExercisesDone= NumOfExercisesDone;
   }
  }
  await individual.updateOne({_id:_id},{$set:{courses:courses}})
  
}

module.exports = 
{ getCourses, 
  createCourse, 
  getMyCourses, 
  getIndivCourses,
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
  insertSubtitle,
  getACourse,
  AddPromotion,
  registerCourse,
  PopularCourses,
  getSubtitles,
  InMyCourses,
  MyProgress,
  getCurrExercise,
  SolveCurrExercise
};