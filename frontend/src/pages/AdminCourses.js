import {useState} from "react"
import axios from 'axios'
import CourseDetailsAdmin from '../components/CourseDetailsAdmin'

const AdminCourses =()=>{
    const [courses,setCourses]= useState('')
    axios.get("/course/").then(res=>{
        setCourses(res.data)
    })
    return(
        <div className="AdminCourses">

        {courses&&courses.map(course=>(
             <CourseDetailsAdmin course={course} key={course._id} />
        ))}
        </div>
    )
}

export default AdminCourses;