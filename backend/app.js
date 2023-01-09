//SETUP
require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app = express();
const MONGO_URI="mongodb+srv://aclProj:ackProjPassword@cluster0.hjrz1bm.mongodb.net/ProjDB?retryWrites=true&w=majority"
const port = process.env.PORT;
// const cookieParser = require("cookie-parser");

//importing 
//Admin
Admin = require('./Models/AdminSchema');
Instructor =require('./Models/InstructorSchema');
CorporateTrainee = require('./Models/CorporateTraineeSchema');
Course = require('./Models/CourseSchema');
IndividualTrainee =require('./Models/IndividualTraineeSchema');
Guest =require('./Models/GuestSchema');
Exercise = require('./Models/ExerciseSchema');
Report =require('./Models/ReportSchema');

// configurations
// Mongo DB
/*mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));*/
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(port, () => {
            console.log('Listening on port', port);

        });
    })
    .catch((error) => {
        console.log(error);
    })

//using body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true}));


//   app.get("/home", (req, res) => {
//     res.status(200).send("You have everything installed!");
//   });

//using cookie parser
// app.use(cookieParser());

//Routing to Admin
const AdminRoute = require("./Routes/Admin");
app.use('/admin', AdminRoute);

//Routing to instructor
const IntrucRoute = require("./Routes/Instructor");
app.use('/instructor', IntrucRoute);

//Routing to guest
const GuestRoute = require("./Routes/Guest");
app.use('/guest', GuestRoute);

//Routing to corporate trainee
const CorporateTraineeRoute = require("./Routes/CorporateTrainee");
app.use('/corporatetrainee', CorporateTraineeRoute);

//Routing to individual trainee
const IndividualTraineeRoute = require("./Routes/IndividualTrainee");
app.use('/individualtrainee', IndividualTraineeRoute);

//Routing to course
const CourseRouter = require("./Routes/Course");
app.use('/course', CourseRouter);

//Routing to login
const loginRoutes= require('./Routes/Login');
app.use('/auth', loginRoutes)

const ExerciseRoute = require('./Routes/Exercise');
app.use('/exercise', ExerciseRoute)

const ReportRoute = require('./Routes/Report');
app.use('/report', ReportRoute)