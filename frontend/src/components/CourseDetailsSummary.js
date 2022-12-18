import { useCoursesContext } from "../hooks/useCourseContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from 'react'


//import YoutubeEmbed from "../components/YoutubeEmbed";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseDetailsSummary = ({ course }) => {
  const { dispatch } = useCoursesContext()
  const {user} = useAuthContext()
  const [readMore,setReadMore]=useState(false);

const extraCourseInfo=<div>
          <p><strong>Exercises: </strong>{course.exercises} </p>
        <br />
  </div>
const linkToshowmoreorLess=readMore?'Show Less << ':'Show More >> '


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
        <p><strong>Title: </strong>{course.title}</p>
        <br />
        <p><strong>Subject: </strong>{course.subject}</p>
        <br />
        <p><strong>Instructor Name: </strong>{course.InstructorName}</p>
        <br />
        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><p><strong><u>{linkToshowmoreorLess}</u></strong></p></a>
      {readMore && extraCourseInfo}
        <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default CourseDetailsSummary