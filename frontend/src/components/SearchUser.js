import { useState } from 'react'
import { useCoursesContext } from "../hooks/useCourseContext"
import CourseDetails from '../components/CourseDetails'
import CourseDetailsSummaryUser from '../components/CourseDetailsSummaryUser'
import axios from 'axios'

const SearchUser = () =>{
const {dispatch} = useCoursesContext()
const [info, setSearchKey]= useState('') 
const [courses, setCourses]= useState('')
const [emptyFields, setEmptyFields] = useState([])
const [error, setError] = useState(null)
const [filterSubject, setFilterSubject]= useState('')
const [max, setMax]= useState('')
const [min,setMin]= useState('')

const api = axios.create({
    baseURL: '/course'})

    const FilterSubject = (e)=>{
        e.preventDefault();
        api.post('/', {"info":filterSubject}).then(res=>{
            setCourses(res.data);
            setFilterSubject('')
            })
        }

 const FilterPrice = (e)=>{
        e.preventDefault();
        api.post('/filterPrice', {max,min}).then(res=>{
          setCourses(res.data);
          setMin('')
          setMax('')
            })
            }



const handleSubmit = async (e) => {
      e.preventDefault()
    //const info = {info}
    api.post('/', {info}).then(res=>{
        setCourses(res.data)
        setSearchKey('')
    })

//    const response = await fetch ('/course', {
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

        
    }
return(
    <form className = "Search">
        <div className = "search" >
        <label>Search Courses</label>
        <input type = "text"
        onChange= {(e)=> setSearchKey(e.target.value)}
        value = {info}
        className={emptyFields.includes('key') ? 'error' : ''}
        />
        <button type ="button" onClick ={handleSubmit}>Search</button>
        </div>
        <div className = "filterPrice">
        <p>Filter Price</p> 
        <input type= "Number" 
         onChange = {(e)=>setMin(e.target.value)}
         value ={min}
        placeholder='min'/>
        <input type= "Number"
        onChange = {(e)=>setMax(e.target.value)}
        value ={max}
        placeholder='max'/>
        <button type ="button" onClick = {FilterPrice}>Filter Price</button>
        </div>

        <div className = "filterSubject">
        <p>Filter Subject</p> 
        <input type= "textbox" 
        onChange = {(e)=>setFilterSubject(e.target.value)}
        value ={filterSubject}
        placeholder='Subject'/>
        <button type ="button" onClick = {FilterSubject}>Filter Subject</button>
        </div>

        
        <div className='SearchResult'>
            <h1>Search Results</h1>
            {courses && courses.map(course => (
          <CourseDetailsSummaryUser course={course} key={course._id} />
            ))}
        </div>
        
        {error && <div className="error">{error}</div>}
    </form>
)

}

export default SearchUser