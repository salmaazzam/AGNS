
const express = require("express");
const router = express.Router();
const course = require('../Models/CourseSchema');

async function AddCourseHelper(coursetoInsert){
     
    var { MongoClient }= require('mongodb');
    var uri = "mongodb+srv://aclProj:ackProjPassword@cluster0.hjrz1bm.mongodb.net/ProjDB?retryWrites=true&w=majority";
    var client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    await client.connect();
    var list = await client.db('ProjDB').collection('courses').find().toArray();
    var flag = true;
    for (let i = 0; i<list.length; i++)
    {
      if( list[i].title=== coursetoInsert.title)
      {
        flag = false;
        break;
      }
    }
    if (flag === true)
    {
        await client.db('ProjDB').collection('courses').insertOne(coursetoInsert);
    }
    client.close();
    return flag;
}



router.get("/", (req, res)=>{
    res.status(200).send("Welcome Instructor");
});

router.post("/", (req, res)=>{
    res.redirect("/instructor/addCourse");
});

router.get("/addCourse", (req, res)=>{
    res.status(200).send("hiiii addCourse");
});

router.post("/addCourse", (req, res)=>{
    var newCourse = new course({ title: req.body.title, price: req.body.price, shortSummary : req.body.shortSummary , subtitles : req.body.subtitles});
    AddCourseHelper(newCourse).then(flag=>{
        if(flag)
        res.status(200).send(" Course Inserted");
        else
        res.status(200).send(" Course exists");
    });
      });

module.exports = router;



