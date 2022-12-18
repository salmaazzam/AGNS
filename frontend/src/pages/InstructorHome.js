import { useEffect,useState} from "react"
import { useCoursesContext } from "../hooks/useCourseContext"
//components
import CourseDetailsInstructor from '../components/CourseDetailsInstructor'
import CourseForm from "../components/CourseForm"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const InstructorHome = () => {
  const [policy,setPolicy]= useState("")
  const api = axios.create({
    baseURL: '/course/get'})
    const {courses, dispatch} = useCoursesContext();
    const testID = "63673640b44f1ebe24992530"
    const Navigate = useNavigate();
     const AcceptPolicy = ()=>{

     }
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
      axios.get('/instructor/policy').then(res=>{
        setPolicy(res.data)
      })

        api.post('/', {"id": testID }).then(res=>{
          dispatch({type: 'SET_COURSE', payload: res.data})
        },[dispatch])
    })

  const Home =()=>{
      Navigate('/instructorProfile')
    }

   // if(policy){
      return (
    
        <div className="Instructor">
          <button type="button" onClick={Home}>My Profile</button>
         <div className="courses">
           <h3>My Courses:</h3>
           {courses && courses.map(course => (
            <CourseDetailsInstructor course={course} key={course._id} />
          ))}
           </div>
           <CourseForm />
         </div>
       
       )
    // }
    // else{
    //   return(
    //     <div className="Instructor">
    //       <p>Accept Policy First</p>
    //       <div className="policy">
    //       <input type="checkbox" id="policy" name="policy" value="policy" required/>
    //       <button type = "button" onClick= {AcceptPolicy}>Accept Policy</button>
    //       </div>
         
    //     </div>
    //   )
    // }

}

export default InstructorHome