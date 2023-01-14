import {useLocation} from "react-router-dom";
import Axios from "axios"
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";


const OneCourseDetails =()=>{
   const location = useLocation();
   const courseID= location.state.id;
   const [course,setCourse]=useState('')
   const [title, setTitle] = useState('')
   const [subject, setSubject] = useState('')
   const [instructorName, setInstructorName] = useState('')
   const [totalHours, setTotalHours] = useState('')
   const [subtitles,setSubtitles]=useState([])
   const [exercises,setExercises]=useState([])
   const [price,setPrice]=useState('')
   const [promotion,setPromotion]=useState('')
   const Navigate =useNavigate();

   const Back = () =>{
    Navigate('/')
};

   useEffect(()=>{
        Axios.post("/course/getACourse",{
            CID:location.state.id
             }).then(res =>{ console.log('get the course details',res.data)
             //setCourse(res.data)
             setTitle(res.data[0].title) 
             setSubject(res.data[0].subject)
             setInstructorName(res.data[0].instructorName)
             setTotalHours(res.data[0].totalHours)
             setSubtitles(res.data[0].subtitles)
             setExercises(res.data[0].exercises)
             setPrice(res.data[0].price)
             setPromotion(res.data[0].promotion)
         }
             ).catch(err => console.log(err))
    
            
    
   })
  // const {title}= course.title;
    console.log(title)
   console.log(courseID);
    return(
        <div className="one-course-details">
            <h1>Course Details</h1>
            <p><strong>Title: </strong>{title}</p>
            <p><strong>Subject: </strong>{subject}</p>
            <p><strong>Instructor Name: </strong>{instructorName}</p>
            <p><strong>Total Hours: </strong>{totalHours}</p>
            <p><strong>Subtitles: </strong>{subtitles}</p>
            <p><strong>Exercises: </strong>{exercises}</p>
            <p><strong>Price: </strong>{price}</p>
            <p><strong>Promotion: </strong>{promotion}</p>
            <button type ="button" onClick = {Back}>Home Page</button>

        </div>
    )
}

export default OneCourseDetails