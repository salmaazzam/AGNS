import { useCoursesContext } from "../hooks/useCourseContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'



//import YoutubeEmbed from "../components/YoutubeEmbed";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseDetailsSummaryCorp = ({ course }) => {
  const { dispatch } = useCoursesContext();
  const {user} = useAuthContext();
  const Navigate =useNavigate();


  //const [readMore,setReadMore]=useState(false);

// const extraCourseInfo=<div>
//           <p><strong>Exercises: </strong>{course.exercises} </p>
//         <br />
//   </div>
// const linkToshowmoreorLess=readMore?'Show Less << ':'Show More >> '
//console.log(course._id);

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
        {/* <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><p><strong><u>{linkToshowmoreorLess}</u></strong></p></a>
      {readMore && extraCourseInfo} */}
        <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        <Link to="/oneCourseCorp"
          state ={{id: course._id}}
          >Show More</Link>
      </div>
    )
  }
  
  export default CourseDetailsSummaryCorp