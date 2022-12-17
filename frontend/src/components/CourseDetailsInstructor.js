import { useCoursesContext } from "../hooks/useCourseContext"
import { useAuthContext } from "../hooks/useAuthContext"
import YoutubeEmbed from "../components/YoutubeEmbed";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Axios from "axios"

const CourseDetailsInstructors = ({ course }) => {
  const { dispatch } = useCoursesContext()
  const {user} = useAuthContext()
  const [URL, setURL]= useState("")
  const Navigate = useNavigate();

  const createExercise = (e)=>{
    e.preventDefault();
    Axios.post("/exercise",{CID:course._id}).then(res=> {
      //console.log('creating exercise',res)
    // Navigate('/addquestions'
    console.log( res.data._id)
   // console.log("^ EXID")
    Navigate('/addquestions',{
  state:{
    id: res.data._id
  }
})
  }).catch(err => console.log(err))
    
  }

  const handleClick = async () => {
    if(!user){
      return
    }
    const response = await fetch('/course/' + course._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_COURSE', payload: json})
    }
  }

  const AddPreview = ()=>{
    Axios.post("/course/addPreview",{CID:course._id, prevLink: URL}).then(res=>{
      console.log("adding preview Link");
      setURL("")
    })
  }

  if(course.preview){
    return (
      
      <div className="course-details">
        <h4>{course.subject}</h4>
        <p><strong>Title: </strong>{course.title}</p>
        <br />
        <p>Total Hours : {course.totalHours}
        <br />
        </p>
        <p> Ratings : {course.ratings}</p>
        <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
        <p><strong>Preview Video:</strong> </p>
        <YoutubeEmbed embedId = {course.preview}/><br/>
        <button type="button" onClick={createExercise}>Create Exercise</button>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
    return (
      
      <div className="course-details">
        <h4>{course.subject}</h4>
        <p><strong>Title: </strong>{course.title}</p>
        <br />
        <p>Total Hours : {course.totalHours}
        <br />
        </p>
        <p> Ratings : {course.ratings}</p>
        <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
        <label>Preview URL :</label>
      <input 
        type="text" 
        onChange={(e) => setURL(e.target.value)} 
        value={URL}
      />
        <button type="button" onClick={AddPreview}>Add Preview</button>  &nbsp;&nbsp;
        <button type="button" onClick={createExercise}>Create Exercise</button>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default CourseDetailsInstructors