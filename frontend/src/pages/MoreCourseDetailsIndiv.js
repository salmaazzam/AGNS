import {useLocation} from "react-router-dom";
import Axios from "axios"
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";
import YoutubeEmbed from "../components/YoutubeEmbed";


const MoreCourseDetailsIndiv=()=>{

    const location = useLocation();
    const courseID= location.state.id;
    //const [course,setCourse]=useState('')
    const [title, setTitle] = useState('')
    const [price,setPrice]=useState('')
    const[shortSummary,setShortSummary]=useState('')
    const [instructorName, setInstructorName] = useState('')
    const [totalHours, setTotalHours] = useState('')
    const [ratings,setRatings]=useState([])
    const [subject, setSubject] = useState('')
    const [subtitles,setSubtitles]=useState([])
    const [exercises,setExercises]=useState([])
    const [reviews,setReviews]=useState([])
    const [preview, setPreview] = useState('')
    const [promotion, setPromotion] = useState('')
    const [result,setResult]=useState('')

    const Navigate =useNavigate()


   const Back = () =>{
    Navigate('/individual')
};

   useEffect(()=>{
        Axios.post("/course/getACourse",{
            CID:location.state.id
             }).then(res =>{ console.log('get the course details',res.data)
             //setCourse(res.data)
             //console.log(res.data[0].InstructorName.name)
             const Instruc=res.data[0].InstructorName
             const IName=JSON.parse(Instruc)

             console.log(IName)
             setTitle(res.data[0].title) 
             setPrice(res.data[0].price)
             setShortSummary(res.data[0].shortSummary)
             setInstructorName(res.data[0].InstructorName)
             setTotalHours(res.data[0].totalHours)
             setRatings(res.data[0].ratings)
             setSubject(res.data[0].subject)
             setSubtitles(res.data[0].subtitles)
             setExercises(res.data[0].exercises)
             setReviews(res.data[0].reviews)
             setPreview(res.data[0].preview)
             setPromotion(res.data[0].promotion)
         }
             ).catch(err => console.log(err))
    
            
    
   })
   const myRes= "Title: "+title+"\n"

  // const {title}= course.title;
   // console.log(instructorName)
   //console.log(courseID);
 
    return(
        <div className="one-course-details">
            <h1>Course Details</h1>
            <p>
            <p><strong>Title: </strong>{title}</p>
            <p><strong>Price: </strong>{price}</p>
            <p><strong>Short Summary: </strong>{shortSummary}</p>
            <p><strong>Subtitles: </strong>{subtitles}</p>
            <p><strong>Instructor Name: </strong>{instructorName}</p>
            <p><strong>Subject: </strong>{subject}</p>
            <p><strong>Total Hours: </strong>{totalHours}</p>
            </p>
            <button type ="button" onClick = {Back}>Home Page</button>

        </div>
    )
  

}


export default MoreCourseDetailsIndiv