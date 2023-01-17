import { useState } from "react"
import axios from "axios"
import CourseDetails from '../components/CourseDetails'
import { useNavigate } from "react-router-dom"


const PopularCoursesCorp = () => {
   const [courses, setCourses] = useState('')
   const Navigate = useNavigate();
    
   axios.get("/course/popularCourses").then(res=>{
        setCourses(res.data)
    })

    const home =()=>{
      Navigate('/corpHome')
    }

    return (
    <div className="Home" >
      <div className="CourseInfo">
        <button type="button" onClick={home}>Back</button>
     <h3>Most Popular Courses:</h3>
     <p>
    
   {courses && courses.map(course => (
          <CourseDetails course={course} key={course._id} />
        ))}
     </p>
        
    </div>
   
    </div>
    )
}

export default PopularCoursesCorp