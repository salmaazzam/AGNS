import { useEffect,useState} from "react"
import { useCoursesContext } from "../hooks/useCourseContext"
//components
import CourseDetails from '../components/CourseDetails'
import CourseForm from "../components/CourseForm"
import axios from 'axios'

const InstructorHome = () => {
  const api = axios.create({
    baseURL: '/course/get'})
    const {courses, dispatch} = useCoursesContext();
    const testID = "63673640b44f1ebe24992530"
    useEffect(() => {
        // const fetchCourses = async () => {
        //   const response = await fetch('/course/63673640b44f1ebe24992530')
        //   const json = await response.json()
        //   if(response.ok){
        //     dispatch({type: 'SET_COURSE', payload: json})
        // }
        //  }
        
        //  fetchCourses()
         
        // }, [dispatch])
        api.post('/', {"id": testID }).then(res=>{
          dispatch({type: 'SET_COURSE', payload: res.data})
        },[dispatch])
    })

    return (
    
      <div className="Instructor">
       <div className="courses">
         <h3>My Courses:</h3>
         {courses && courses.map(course => (
          <CourseDetails course={course} key={course._id} />
        ))}
         </div>
         <CourseForm />
       </div>
     
     )
}

export default InstructorHome