import { useCoursesContext } from "../hooks/useCourseContext"
import { useAuthContext } from "../hooks/useAuthContext"
import YoutubeEmbed from "../components/YoutubeEmbed";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Axios from "axios"



const CourseDetailsIndividual = ({ course }) => {
  const { dispatch } = useCoursesContext()
  const {user} = useAuthContext()
  const Navigate = useNavigate();


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
  return(
    <div className="indiv-course-details">
      <p><strong>Title: </strong>{course.title}</p>
      <button type= "button" >Show Details</button>
    </div>
  )

}

export default CourseDetailsIndividual

//onClick={ShowCourseDetails}