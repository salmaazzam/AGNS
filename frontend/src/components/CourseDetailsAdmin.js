import { useCoursesContext } from "../hooks/useCourseContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseDetailsAdmin = ({ course }) => {
  const { dispatch } = useCoursesContext()
  const {user} = useAuthContext()
  const Navigate = useNavigate();

  const createPromotion = (e) =>{

    e.preventDefault();
    Navigate('/addpromotionAdmin',{
      state:{
        CID:course._id
      }
      })
      console.log(course._id)
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
        <p>Price : {course.price}</p>
        <button type="button" onClick={createPromotion}>Add Promotion</button>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default CourseDetailsAdmin