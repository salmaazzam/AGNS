import { useCoursesContext } from "../hooks/useCourseContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from 'react'


//import YoutubeEmbed from "../components/YoutubeEmbed";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseDetailsIndividual = ({ course }) => {
    //console.log({course})

//   const [readMore,setReadMore]=useState(false);

// const extraCourseInfo=<div>
//           <p><strong>Exercises: </strong>{course.exercises} </p>
//         <br />
//   </div>
// const linkToshowmoreorLess=readMore?'Show Less << ':'Show More >> '


    return (
      
      <div className="course-details">
        <p><strong>Title: </strong>{course.title}</p>
        <br />
        <p><strong>Subject: </strong>{course.subject}</p>
        <br />
        <p><strong>Instructor Name: </strong>{course.InstructorName}</p>
        <br />
      </div>
    )
  }
  
  export default CourseDetailsIndividual