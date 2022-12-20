import { useEffect,useState} from "react"
import { useCoursesContext } from "../hooks/useCourseContext"
import {useIndividualContext} from "../hooks/useIndividualContext"
import CourseDetailsIndividual from "../components/CourseDetailsIndividual"

import axios from 'axios'

const IndividualHome = () => {
    const [courses,setCourses]= useState([])
    // const api = axios.create({
    //     baseURL: '/individualtrainee'})
    
        axios.get('/individualtrainee/639cd9ab3c28cdab5b2644e2').then(res=>{
            setCourses(res.data)
            console.log(((courses[0].courses)))
          })

    return(
        <div className="MyCourses">
            <h1><u>My Courses</u></h1>
           {courses && courses.map(course => (
            <CourseDetailsIndividual course={course} key={course._id} />
          ))}
        </div>
    )   
}

export default IndividualHome