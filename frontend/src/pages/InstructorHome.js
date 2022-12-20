import { useEffect,useState} from "react"
import { useCoursesContext } from "../hooks/useCourseContext"
//components
import CourseDetailsInstructor from '../components/CourseDetailsInstructor'
// import CourseForm from "../components/CourseForm"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const InstructorHome = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = user.token

  const [policy,setPolicy]= useState('')
  const api = axios.create({
    baseURL: '/course/get'})
   // const {courses, dispatch} = useCoursesContext();
   const [courses, setCourses]= useState('')
   const testID = "63673640b44f1ebe24992530"
    const Navigate = useNavigate();

     const AcceptPolicy = (e)=>{
      e.preventDefault()
      axios.get('/instructor/policies', {
        headers: { Authorization: `Bearer ${token}` }
    }).then(res=>{
      // console.log(res.data)
        setPolicy(res.data)
      })
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
      axios.get('/course/get',{
        headers: { Authorization: `Bearer ${token}` }
    }).then(res=>{
      setCourses(res.data)
    })
      
      axios.get('/instructor/policy', {
        headers: { Authorization: `Bearer ${token}` }
    }).then(res=>{
      // console.log(res.data.policy==true)
      // console.log(policy=="true")
      if(res.data.policy==true)
        setPolicy(res.data)
      })

        // api.post('/', {"id": testID }).then(res=>{
        //   dispatch({type: 'SET_COURSE', payload: res.data})
        // },[dispatch])
    }
    )

  const Home =()=>{
      Navigate('/instructorProfile')
    }

   const AddCourse =() =>{
    Navigate('/addcourse')
   } 

   if(policy){
      return (
        <div className="Instructor">
          <button type="button" onClick={Home}>My Profile</button>&nbsp;&nbsp;
          <button type="button" onClick={AddCourse}>Add Course</button>
         <div className="courses">
           <h3>My Courses:</h3>
           {courses && courses.map(course => (
            <CourseDetailsInstructor course={course} key={course._id} />
          ))}
           </div>
           {/* <CourseForm /> */}
         </div>
       
       )
    }
    else{
      return(
        <div className="Instructor">
          <p>Accept Policy First</p>
          <div className="policy">
          <form className="policySubmit" onSubmit = {AcceptPolicy}>
          <input type="checkbox" id="policy" name="policy" value="policy" required/>
          <button>Accept Policy</button>
          </form>
         </div>
         
        </div>
      )
    }

}

export default InstructorHome