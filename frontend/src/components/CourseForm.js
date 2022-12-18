import { useState } from 'react'
import { useCoursesContext } from "../hooks/useCourseContext"
import { useAuthContext } from '../hooks/useAuthContext'

import Axios from "axios"
import {useLocation} from "react-router-dom";


import { useNavigate } from "react-router-dom";

const CourseForm = () => {
  const { dispatch } = useCoursesContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [price, setPrice] = useState('')
  const [shortSummary, setShortSummary] = useState('')
  // const [subtitles, setSubtitles] = useState('')
  const [InstructorName, setInstructorName] = useState('')
  const [InstructorId, setInstructorId] = useState('')
  // const [totalHours, setTotalHours] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  const Navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   if (!user) {
  //     setError('You must be logged in')
  //     return
  //   }

  //   const Course = {title, price, shortSummary, subtitles, InstructorName,InstructorId, totalHours, subject}
    
  //   const response = await fetch('/course/63673640b44f1ebe24992530/create', {
  //     method: 'POST',
  //     body: JSON.stringify(Course),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${user.token}`
  //     }
  //   })
  //   const json = await response.json()

  //   if (!response.ok) {
  //     setError(json.error)
  //     setEmptyFields(json.emptyFields)
  //   }
  //   if (response.ok) {
  //     setEmptyFields([])
  //     setError(null)
  //     setTitle('')
  //     setPrice('')
  //     setShortSummary('')
  //     setSubtitles('')
  //     setInstructorName('')
  //     setInstructorId('')
  //     setTotalHours('')
  //     setSubject('')
  //     console.log('new course is inserted:', json)
  //     dispatch({type:'CREATE_COURSE', payload: json})
  //   }

  // }


  const addCourse = async (e) =>{
    e.preventDefault()
    Axios.post("/course/insert",{id:InstructorId,
      title, price, shortSummary,
      InstructorName, InstructorId, subject
    
        }).then(res =>{ console.log('postinggggggg course',res.data)
        setTitle('')
        setPrice('')
        setShortSummary('')
        setInstructorName('')
        setInstructorId('')
        setSubject('')
    
    }
        ).catch(err => console.log(err))

        Navigate('/addsubtitle')    

  }

  return (
    <form className="create" onSubmit={addCourse}> 
      <h3>Add a New Course</h3>

      <label>Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Price:</label>
      <input 
        type="text" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
        className={emptyFields.includes('Price') ? 'error' : ''}
      />

      <label>shortSummary:</label>
      <input 
        type="text" 
        onChange={(e) => setShortSummary(e.target.value)} 
        value={shortSummary} 
        className={emptyFields.includes('shortSummary') ? 'error' : ''}
      />

    {/* <label>subtitle:</label>
      <input 
        type="text" 
        onChange={(e) => setSubtitles(e.target.value)} 
        value={subtitles} 
        className={emptyFields.includes('subtitle') ? 'error' : ''}
      /> */}
       <label>InstructorName:</label>
      <input 
        type="text" 
        onChange={(e) => setInstructorName(e.target.value)} 
        value={InstructorName} 
        className={emptyFields.includes('InstructorName') ? 'error' : ''}
      />
      <label>InstructorId:</label>
      <input 
        type="text" 
        onChange={(e) => setInstructorId(e.target.value)} 
        value={InstructorId} 
        className={emptyFields.includes('InstructorId') ? 'error' : ''}
      />
      {/* <label>totalHours:</label>
      <input 
        type="text" 
        onChange={(e) => setTotalHours(e.target.value)} 
        value={totalHours} 
        className={emptyFields.includes('totalHours') ? 'error' : ''}
      /> */}

      <label>subject:</label>
      <input 
        type="text" 
        onChange={(e) => setSubject(e.target.value)} 
        value={subject} 
        className={emptyFields.includes('subject') ? 'error' : ''}
      />


      <button>Add Course</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CourseForm