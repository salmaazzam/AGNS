# AGNS
## Table of Contents
- [Motivation](https://github.com/salmaazzam/AGNS/edit/main/README.md#motivation)
- [Build Status](https://github.com/salmaazzam/AGNS/edit/main/README.md#build-status)
- [Screenshots](https://github.com/salmaazzam/AGNS/edit/main/README.md#screenshots)
- [Tech/Framework Used](https://github.com/salmaazzam/AGNS/edit/main/README.md#techframework-used)
- [Features](https://github.com/salmaazzam/AGNS/edit/main/README.md#features)
- [Code Examples](https://github.com/salmaazzam/AGNS/edit/main/README.md#code-examples)
- [Installation](https://github.com/salmaazzam/AGNS/edit/main/README.md#installation)
- [API reference](https://github.com/salmaazzam/AGNS/edit/main/README.md#api-reference)
- [Tests](https://github.com/salmaazzam/AGNS/edit/main/README.md#tests)
- [How to use](https://github.com/salmaazzam/AGNS/edit/main/README.md#how-to-use)
- [Credits](https://github.com/salmaazzam/AGNS/edit/main/README.md#credits)
- [License](https://github.com/salmaazzam/AGNS/edit/main/README.md#license)

## Motivation
This project is created for the Course CSEN704 Advanced Computer lab in GUC.
The project aims to teach students:
- Scrum and Agile methodologies
- Software development 
- Software testing
- Use MERN

## Build Status
- The project is still under development
- Need to add testing 
- Need to add stripe for payment
- Need to add certificate 


## Screenshots
Guest Home Page
![image](https://user-images.githubusercontent.com/83556231/213033692-98c2496a-6747-4a06-ac98-f481eff82354.png)

LogIn Page 
![image](https://user-images.githubusercontent.com/83556231/213033785-339b3ec2-cb49-49d0-9d9f-81cdfa69e49f.png)

Individual Trainee Home Page
![image](https://user-images.githubusercontent.com/83556231/213033864-25909074-6f4e-4ec4-99a6-8c09fd72711b.png)

My Course Details
![image](https://user-images.githubusercontent.com/83556231/213033904-6d0a3b2f-32a6-41bf-af62-3338e1ca05cf.png)

Reporting a Problem
![image](https://user-images.githubusercontent.com/83556231/213033957-ab4af3e6-e329-48a8-950a-d6bce304ca8b.png)

Watch Video While Taking Notes
![image](https://user-images.githubusercontent.com/83556231/213034103-ad00b7b9-f896-41a9-baf8-53280e8da583.png)




## Tech/Framework used
- [MongoDB](https://www.mongodb.com/)
- [MongoDB atlas](https://www.mongodb.com/atlas/database)
- [Mongoose](https://mongoosejs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Github](https://github.com/)
- [Github Desktop](https://desktop.github.com/)
- [Postman](https://www.postman.com/)
- [VSCode](https://code.visualstudio.com/)



## Features
Our system has 4 types of users:
1. Admin
   - Add instructors and corporate trainees
   - 
2. Instructor
   - Create and edits course
   - Update my profile
   - Add promotion to a course
   - Alter course
   
3. Individual Trainee
   - Search and Filter courses
   - Pay for a course
   - Report Problems
   - Watch a video and solve exercises from my courses
   - Rate a course and its instructor
   
4. Corporate Trainee
   - Search and Filter courses
5. Guest
   - Signup as individual trainee
   - Search and filter courses



## Code examples
Method within the course Controller to check whether or not i am registered for this course to dictate if i should see a register button or not in the frontend
``` node
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

```

3 methods that are used to :
1. instantiate an empty array of type Exercise 
2. Populate the array with objects of type Question
3. Once done with all the questions, append the Exercise Array onto the pre-existing Exercises in this specific course
``` node
const CreateEx = async(req,res)=>{
    const {CID}= req.body
    const Answers= []
    try{
        const exercise = await Exercise.create({CID, Answers})
        var {NumOfExercises}= await Course.findById(CID);
        NumOfExercises++;
        await Course.updateOne({_id:CID},{$set :{NumOfExercises:NumOfExercises}});
        res.status(200).json(exercise)
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
}

const AddQuestion = async (req, res) => {
  const {question, answer1, answer2, answer3, answer4, solution ,ExId} = req.body
  const answers = [answer1,answer2,answer3,answer4]

  try {
    const newQ = await Question.create({Question:question, Answers: answers, CorrectAnswer:solution})
    const exercise = await Exercise.findOneAndUpdate({_id: ExId}, {$push:{Exercise:newQ}})
    res.status(200).json(exercise)

}
catch(error){
    res.status(400).json({ error: error.message })
}
  }

  const SubmitExercise = async(req,res)=>{
    const{_id}= req.body
    const exercise = await Exercise.findById(_id);
    const course = await Course.findByIdAndUpdate({_id:exercise.CID},{$push:{exercises:exercise}})
    res.status(200).json(course)

  }
```
 

## Installation
install using npm </br>
```sh
git clone https://github.com/salmaazzam/AGNS.git 
cd AGNS
cd backend && npm i 
cd frontend && npm i
```
 
 


## API reference
### Login
Login User
</br>
`` POST /auth/login ``

| Body | Type | Description |
| ------ | ------ | ------ |
| username |  String |**Required**  Username of the admin | 
| password |  String |**Required** Password of the admin | 

Sign Up User
</br>
`` /auth/signup ``

| Body | Type | Description |
| ------ | ------ | ------ |
| firstName |  String |**Required**  firstname of user| 
| lastName |  String |**Required**  lastname of user | 
| username |  String |**Required**  username of user|
| email |  String |**Required**  email of user | 
| password |  String |**Required** password of user | 
| gender |  String |**Required** gender of user | 

### Admin 
Get all the Admins
</br>
`` GET /admin ``

<br />
Create an Admin
</br>

`` POST /admin ``

| Body | Type | Description |
| ------ | ------ | ------ |
| name | String | **Required** Name of the admin | 
| username |  String |**Required**  Username of the admin | 
| password |  String |**Required** Password of the admin | 


Deleting an Admin 
</br>
`` DELETE /admin/:id ``  

| Headers | Type | Description |
| ------ | ------ | ------ |
| Authorization | String | **Required**  Bearer token of the admin.| 

| Body | Type | Description |
| ------ | ------ | ------ |
| id | String | **Required** Id of the admin that we want to delete| 
 
 ### Instructor
Get all instructors
<br/>
`` GET /``

Create an instructor 
<br/>
`` POST /``
| Body | Type | Description |
| ------ | ------ | ------ |
| name | String | **Required** Bearer token of the admin| 
| username |  String |**Required**  Username of the instructor | 
| password |  String |**Required** Password of the instructor |
| email |  String |**Required Email** of the instructor |

Get the details of an instructor
<br/>
`` GET /yarab``
| Headers | Type | Description |
| ------ | ------ | ------ |
| Authorization | string | **Required** Bearer token of the instructor |


| Body | Type | Description |
| ------ | ------ | ------ |
| _id | String | Required ID of the instructor | 


Get ratings
<br/>
`` GET /myRatings``
| Headers | Type | Description |
| ------ | ------ | ------ |
| Authorization | string |**Required** Bearer token of the instructor |

| Body | Type | Description |
| ------ | ------ | ------ |
| _id | String | **Required** ID of the instructor |


### Courses
Create course
<br/>
`` POST /:id/create``
| Headers | Type | Description |
| ------ | ------ | ------ |
| Authorization | string | **Required** Bearer token of the instructor |

| Body | Type | Description |
| ------ | ------ | ------ |
| price | Number | Required price of the course | 
| shortSummary | String | Required short summary of the course |
| subtitles | String | Required subtitles of the course | 
| InstructorName | String | Required the name of the instructor that creates the course | 
| InstructorId | String | Required ID of the instructor that creates the course| 
| totalHours | String | Required total hours of the course | 
| subject | String | Required subject of the course | 
 

get my courses
<br/>
`` GET /search``
| Body | Type | Description |
| ------ | ------ | ------ |
| _id | string | **Required** ID of the instructor | 
 
get individual trainee courses
<br/>
`` GET /getIndividualCourses``
| Headers | Type | Description |
| ------ | ------ | ------ |
| Authorization | string | **Required** Bearer token of the individual |

| Body | Type | Description |
| ------ | ------ | ------ |
| _id | string | Required ID of the individual trainee | 



### Refund
List of all refunds
<br/>
`` GET /``
 


### IndividualTrainee
Get a specific individual trainee
<br/>
`` GET /yarab2``
| Headers | Type | Description |
| ------ | ------ | ------ |
| Authorization | string | **Required** Bearer token of the individual |

| Body | Type | Description |
| ------ | ------ | ------ |
| _id | string | **Required** ID of the individual trainee | 
 




### corporateTrainee
Gets a single corporate trainee
<br/>
`` GET /:id``
| Headers | Type | Description |
| ------ | ------ | ------ |
| Authorization | string | **Required** Bearer token of the corporate trainee |

| Body | Type | Description |
| ------ | ------ | ------ |
| id | string | **Required** ID of corporate trainee | 
 

create corporate trainee
<br/>
`` POST /``
| Body | Type | Description |
| ------ | ------ | ------ |
| name | string | **Required** name of corporate trainee | 
| username | string | **Required** username of corporate trainee | 
| password | string | **Required** password of corporate trainee | 
 


### Report
Creating a report 
</br>
`` POST /report ``

| Body | Type | Description |
| ------ | ------ | ------ |
| type | String | **Required** Type of the report can be technical, financial or other|
| problem | String| **Required** The problem user is facing  | 
| userID | String | **Required** id of the user |   
| course | String | **Required** name of the course thats being reported | 
| courseid |String| **Required** id of the course| 

Getting all reports
</br>
`` POST /report/allreports``



Getting My reports
</br>
`` POST /report/getMyReports``


| Body | Type | Description |
| ------ | ------ | ------ |
| id | String | **Required** id of report to return|




### Exercise 
Creating an Exercise
</br>
`` POST /exercise ``

| Body | Type | Description |
| ------ | ------ | ------ |
| CID | String | **Required** Id of the course to create an exercise in|
| Answers | Array of questions| **Required** | 
 


Adding a question to exercise
</br>
`` POST /exercise/question ``

| Body | Type | Description |
| ------ | ------ | ------ |
| ExId | String | **Required** Id of the exercise to add a question to|
| question | String | **Required** | 
| answer1,2,3,4 | String | **Required** 4 Strings thar are the choices for the question| 
| solution | String | **Required** | 
 



## How to use
- to run the backend of the project <br />
`cd backend` <br />
`node app.js`<br />
- to run the frontend of the project <br />
`cd frontend`<br />
`npm start`
## Contribute
For contribution you can fork our repo and clone it, Install the depenencies needed and create a branch that you can add your changes to then commit and push the changes. Create a pull request that will them be reviewed and merged by us. 

## Credits
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Express Documentation](https://expressjs.com/en/4x/api.html)
- [NodeJS Documentation](https://nodejs.org/en/docs/)
- [HTML W3School](https://www.w3schools.com/html/)


