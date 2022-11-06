import { useEffect} from "react"
import { useCoursesContext } from "../hooks/useCourseContext"
//components
import CourseDetails from '../components/CourseDetails'
import CourseForm from "../components/CourseForm"

const InstructorHome = () => {
    const {courses, dispatch} = useCoursesContext();
    useEffect(() => {
        const fetchCourses = async () => {
          const response = await fetch('/course/63673640b44f1ebe24992530')
          const json = await response.json()
          if(response.ok){
            dispatch({type: 'SET_COURSE', payload: json})
        }
         }
        
         fetchCourses()
         
        }, [dispatch])

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