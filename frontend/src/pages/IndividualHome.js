import { useEffect,useState} from "react"
 import axios from 'axios'
 import CourseDetailsIndividual from '../components/CourseDetailsIndividual'
import { useNavigate } from "react-router-dom"
// import { useNavigate } from "react-router-dom";

const IndividualHome = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.token
    const [courses, setCourses]= useState('')
    const Navigate = useNavigate();

    useEffect(()=>{
        axios.get('/course/getIndividualCourses',{
            headers: { Authorization: `Bearer ${token}` }
        }).then(res=>{
          setCourses(res.data)   //courses is now set to the courses taken by an individual
        })
    })

    const popular =()=>{
        Navigate('/popularCourses')
    }
    const search =()=>{
        Navigate('/searchPageUser')
    }

    const reports =()=>{
        Navigate('/myReports')
    }

    return (
        <div className ="individualHome">
            <h1>Home Page</h1>
            <button type="button" onClick={popular}>Most Popular Courses</button> &nbsp;&nbsp;
            <button type="button" onClick={search}>Search For Courses</button> &nbsp;&nbsp;
            <button type="button" onClick={reports}>View Past Reports</button>
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