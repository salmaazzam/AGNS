//SETUP
const express = require("express");
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;

//importing 
//Admin
Admin = require('./Models/AdminSchema');
Instructor = require('./Models/InstructorSchema');
CorporateTrainee = require('./Models/CorporateTraineeSchema');
Course = require('./Models/CourseSchema');
IndividualTrainee =require('./Models/IndividualTraineeSchema');
Guest =require('./Models/GuestSchema');

// configurations
// Mongo DB
mongoose.connect(process.env.MONGO_URL).then(()=>{
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

//Routing to guest
const GuestRoute = require("./Routes/Guest");
app.use('/guest', GuestRoute);

//Routing to corporate trainee
const CorporateTraineeRoute = require("./Routes/CorporateTrainee");
app.use('/corporatetraniee', CorporateTraineeRoute);

//Routing to individual trainee
const IndividualTraineeRoute = require("./Routes/IndividualTrainee");
app.use('/individualtrainee', IndividualTraineeRoute);