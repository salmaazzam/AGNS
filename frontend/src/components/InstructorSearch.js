import { useEffect,useState } from 'react'
import { useCoursesContext } from "../hooks/useCourseContext"
import CourseDetails from '../components/CourseDetails'

import axios from 'axios'
import { max } from 'date-fns'

const InstructorSearch = () =>{
const {dispatch} = useCoursesContext()
const [info, setSearchKey]= useState('') 
const [filterSubject, setFilterSubject]= useState('')
const [courses, setCourses]= useState('')
const [emptyFields, setEmptyFields] = useState([])
const [error, setError] = useState(null)
const [searchResult, setSearchResult]= useState([])
const[max, setMax]= useState('')
const[min,setMin]=useState('')
const api = axios.create({
    baseURL: '/course'})
const testID = "636e4c6ec3a1faa23d6fa918"

// const handleSubmit = async (e) => {
//       e.preventDefault()
//     const info = {info}

//    const response = await fetch ('/course/63673640b44f1ebe24992530', {
//     method: 'POST',
//      body: JSON.stringify(info),
//       headers:{
//                 'Content-Type': 'application/json'
//             }
//         })
//         const json = await response.json()
//         if(response.ok){
//             setCourses(json)
//             dispatch ({type: 'SET_COURSE', payload: json})
//         }

        
//     }

const SearchButton = (e)=>{
    e.preventDefault();
    api.post('/search', {info, "id":testID}).then(res=>{
        setSearchResult(res.data);
        setSearchKey('')
    })

}

const FilterSubject = (e)=>{
    e.preventDefault();
    api.post('/search', {"info":filterSubject, "id":testID}).then(res=>{
        setSearchResult(res.data);
        setFilterSubject('')
    })          

}

const FilterPrice = (e)=>{
    e.preventDefault();
    api.post('/filterPrice', {max, min, "id":testID}).then(res=>{
        setSearchResult(res.data);
        setMin('');
        setMax('');
    })

}


const arr = searchResult.map((course)=>{
    return(
        <div className="info">
            {/* <p><strong>Title</strong> {course.title}</p> <br/>
            <p><strong>Price</strong> {course.price}</p><br/>
            <p><strong>shortSummary</strong>{course.shortSummary}</p> <br/>
            <p><strong>subtitles</strong>{course.subtitles}</p><br/>
            <p><strong>InstructorName</strong>{course.InstructorName}</p><br/>
            <p><strong>totalHours</strong>{course.totalHours}</p> <br/>
            <p><strong>subject</strong>{course.subject}</p><br/> */}
            <CourseDetails course={course} key={course._id} />

        </div>        
    )
})
return(
    <form className = "Search">
        <div className = "search">
        <label>Search My Courses</label>
        <input type = "text"
        onChange= {(e)=> setSearchKey(e.target.value)}
        value = {info}
        className={emptyFields.includes('key') ? 'error' : ''}
        />
        <button type = "button" onClick = {SearchButton}>Search </button>
        </div>
        <div className = "filterPrice">
        <p>filter Price</p> 
        <input type= "number" placeholder='min' onChange= {(e)=> setMin(e.target.value)}
        value = {min}/>
        <input type= "number" placeholder='max' onChange= {(e)=> setMax(e.target.value)}
        value = {max}/>
        <button type = "button" onClick = {FilterPrice}>Filter Price</button>
        </div>

        <div className = "filterSubject">
        <p>filter Subject</p> 
        <input type= "textbox"         
        onChange= {(e)=> setFilterSubject(e.target.value)}
        value = {filterSubject}
        className={emptyFields.includes('key') ? 'error' : ''}/>
        <button type ="button" onClick= {FilterSubject}>Filter Subject </button>
        </div>
        <div className='SearchResult'>
            <h1>Search Results</h1>
            {searchResult && searchResult.map(course => (
          <CourseDetails course={course} key={course._id} />
        ))}
        </div>
        
        {error && <div className="error">{error}</div>}
        {/* {searchResult&& searchResult.map(course => (
          <CourseDetails course={course} key={course._id} />
        ))} */}
        {/* {arr} */}
    </form>
)

}

export default InstructorSearch