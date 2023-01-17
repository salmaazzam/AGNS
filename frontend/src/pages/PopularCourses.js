import { useState } from "react"
import axios from "axios"
import CourseDetails from '../components/CourseDetails'


const PopularCourses = () => {
   const [courses, setCourses] = useState('')
    
   axios.get("/course/popularCourses").then(res=>{
        setCourses(res.data)
    })

    return (
    <div className="Home" >
      <div className="CourseInfo">
     <h2>Home</h2>
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

export default PopularCourses