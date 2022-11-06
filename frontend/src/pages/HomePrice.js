import { useEffect, useState } from "react"
import { useCoursesContext } from "../hooks/useCourseContext";
import CourseDetailsprice from '../components/CourseDetailsprice'

const HomePrice = () => {
   const {courses, dispatch} =useCoursesContext()
    useEffect(() => {
        const fetchCourses = async () => {
          const response = await fetch('/course')
          const json = await response.json()
          // console.log(json)
          if(response.ok){
            dispatch({type: 'SET_COURSE', payload: json})
            // an array of workouts (objects) as when we call getWorkouts method in the backend we return a list of all the workouts
        }
         }
        
         fetchCourses()
         
        }, [dispatch])

    return (
    <div className="Homeprice" >
     <h2>Home</h2>
     <h3>All Courses:</h3>
     <p>
    
   {courses && courses.map(course => (
          <CourseDetailsprice course={course} key={course._id} />
        ))}
     </p>
        
    </div>
    )
}

export default HomePrice