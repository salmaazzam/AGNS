const express = require("express");
const router = express.Router();
const Admin = require('../Models/AdminSchema');
const CorporateTrainee = require("../Models/CorporateTraineeSchema");
const Instructor = require('../Models/InstructorSchema');

//helper methods
async function AddAdminHelper (Admininsert){
    
    var { MongoClient }= require('mongodb');
    var uri = "mongodb+srv://aclProj:ackProjPassword@cluster0.hjrz1bm.mongodb.net/ProjDB?retryWrites=true&w=majority";
    var client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    await client.connect();
    var list = await client.db('ProjDB').collection('admins').find().toArray();
    var flag = true;
    for (let i = 0; i<list.length; i++)
    {
      if( list[i].username=== Admininsert.username)
      {
        flag = false;
        break;
      }
    }
    if (flag === true)
    {
        await client.db('ProjDB').collection('admins').insertOne(Admininsert);
    }
    client.close();
    
    return flag;
}


async function AddInstructorHelper (InstructorInsert){
    
    var { MongoClient }= require('mongodb');
    var uri = "mongodb+srv://aclProj:ackProjPassword@cluster0.hjrz1bm.mongodb.net/ProjDB?retryWrites=true&w=majority";
    var client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    await client.connect();
    var list = await client.db('ProjDB').collection('instructors').find().toArray();
    var flag = true;
    for (let i = 0; i<list.length; i++)
    {
      if( list[i].username=== InstructorInsert.username)
      {
        flag = false;
        break;
      }
    }
    if (flag === true)
    {
        await client.db('ProjDB').collection('instructors').insertOne(InstructorInsert);
    }
    client.close();
    return flag;
}

async function AddCorpTraineehelper(corpTrainee){
     
    var { MongoClient }= require('mongodb');
    var uri = "mongodb+srv://aclProj:ackProjPassword@cluster0.hjrz1bm.mongodb.net/ProjDB?retryWrites=true&w=majority";
    var client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    await client.connect();
    var list = await client.db('ProjDB').collection('corporatetrainees').find().toArray();
    var flag = true;
    for (let i = 0; i<list.length; i++)
    {
      if( list[i].username=== corpTrainee.username)
      {
        flag = false;
        break;
      }
    }
    if (flag === true)
    {
        await client.db('ProjDB').collection('corporatetrainees').insertOne(corpTrainee);
    }
    client.close();
    return flag;
}


router.get("/", (req, res)=>{
    res.status(200).send("Welcome Admin");
});


router.post("/", (req, res)=>{
    res.redirect("/admin/addAdmin");
});

router.get("/addAdmin", (req, res)=>{
    res.status(200).send("hiiii addAdmin");
});

router.post("/addAdmin", (req, res)=>{
    var newAdmin = new Admin({ username: req.body.username, password: req.body.password});
    AddAdminHelper(newAdmin).then(flag=>{
        if(flag)
        res.status(200).send(" Admin Inserted");
        else
        res.status(200).send(" Admin exists");
    });
      });

      
router.get("/addInstructor", (req, res)=>{
    res.status(200).send("hiiii addInstructor");
});

router.post("/addInstructor", (req, res)=>{
    var newInstructor = new Instructor({ username: req.body.username, password: req.body.password});
    AddInstructorHelper(newInstructor).then(flag=>{
        if(flag)
        res.status(200).send("Instructor Inserted");
        else
        res.status(200).send("Instructor exists");
    });
})

    
router.get("/addCorporateTrainee", (req, res)=>{
    res.status(200).send("hiiii addCorporateTrainee");
});

router.post("/addCorporateTrainee", (req, res)=>{
    var newCorporateTrainee = new CorporateTrainee({ username: req.body.username, password: req.body.password});
    AddCorpTraineehelper(newCorporateTrainee).then(flag=>{
        if(flag)
        res.status(200).send("CorpTrainee Inserted");
        else
        res.status(200).send("CorpTrainee exists");
    });
})


module.exports = router;
