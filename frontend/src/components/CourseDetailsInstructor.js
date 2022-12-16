import { useCoursesContext } from "../hooks/useCourseContext"
import { useAuthContext } from "../hooks/useAuthContext"
import YoutubeEmbed from "../components/YoutubeEmbed";
import { useNavigate } from "react-router-dom";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseDetailsInstructors = ({ course }) => {
  const { dispatch } = useCoursesContext()
  const {user} = useAuthContext()
  const Navigate = useNavigate();

  const createExercise = (e)=>{
    e.preventDefault();
    // Navigate('/courseDetails')
  }

  const handleClick = async () => {
    if(!user){
      return
    }
    const response = await fetch('/course/' + course._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_COURSE', payload: json})
    }
  }
  if(course.preview){
    return (
      
      <div className="course-details">
        <h4>{course.subject}</h4>
        <p><strong>Title: </strong>{course.title}</p>
        <br />
        <p>Total Hours : {course.totalHours}
        <br />
        </p>
        <p> Ratings : {course.ratings}</p>
        <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
        <p><strong>Preview Video:</strong> </p>
        <YoutubeEmbed embedId = {course.preview}/>
        <button type="button" onClick={createExercise}></button>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
    return (
      
      <div className="course-details">
        <h4>{course.subject}</h4>
        <p><strong>Title: </strong>{course.title}</p>
        <br />
        <p>Total Hours : {course.totalHours}
        <br />
        </p>
        <p> Ratings : {course.ratings}</p>
        <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
        <button type="button" onClick={createExercise}>Create Exercise</button>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default CourseDetailsInstructors