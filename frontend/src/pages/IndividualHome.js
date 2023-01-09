import { useEffect,useState} from "react"
 import axios from 'axios'
 import CourseDetailsIndividual from '../components/CourseDetailsIndividual'
// import { useNavigate } from "react-router-dom";

const IndividualHome = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.token
    const [courses, setCourses]= useState('')

    useEffect(()=>{
        axios.get('/course/getIndividualCourses',{
            headers: { Authorization: `Bearer ${token}` }
        }).then(res=>{
          setCourses(res.data)   //courses is now set to the courses taken by an individual
        })
    })

    return (
        <div className ="individualHome">
            <h1>Home Page</h1>
            <div className="courses">
           <h2>My Courses:</h2>
           {courses && courses.map(course => (
            <CourseDetailsIndividual course={course} key={course._id} />
          ))}
           </div>
        </div>
    )
} 


export default IndividualHome