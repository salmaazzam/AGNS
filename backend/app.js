//SETUP
const express = require("express");
const mongoose = require('mongoose');

const MongoURI = 'mongodb+srv://aclProj:ackProjPassword@cluster0.hjrz1bm.mongodb.net/ProjDB?retryWrites=true&w=majority';
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || "8000";

//importing 
//Admin
Admin = require('./Models/AdminSchema');
Instructor = require('./Models/InstructorSchema');
CorporateTrainee = require('./Models/CorporateTraineeShema');
Course = require('./Models/CourseSchema');

// configurations
// Mongo DB
mongoose.connect(MongoURI).then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));

//using body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true}));


//   app.get("/home", (req, res) => {
//     res.status(200).send("You have everything installed!");
//   });


//Routing to Admin
const AdminRoute = require("./Routes/Admin");
app.use('/admin', AdminRoute);

//Routing to instructor
const IntrucRoute = require("./Routes/Instructor");
app.use('/instructor', IntrucRoute);

