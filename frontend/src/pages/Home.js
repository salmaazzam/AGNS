import { useEffect, useState } from "react"
import { useCoursesContext } from "../hooks/useCourseContext";
import CourseDetails from '../components/CourseDetails'
import CountryForm from '../components/CountryForm'

const Home = () => {
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
    <div className="Home" >
      <div className="CourseInfo">
     <h2>Home</h2>
     <div className = "Country">
      <CountryForm />
    </div>
     <h3>All Courses:</h3>
     <p>
    
   {courses && courses.map(course => (
          <CourseDetails course={course} key={course._id} />
        ))}
     </p>
        
    </div>
   
    </div>
    )
}

export default Home