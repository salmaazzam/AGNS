import { useCoursesContext } from "../hooks/useCourseContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseDetailsprice = ({ course }) => {
  const { dispatch } = useCoursesContext()

  const handleClick = async () => {
    const response = await fetch('/course/' + course._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_COURSE', payload: json})
    }
  }
    return (
      
      <div className="course-details-price">
        <h4>{course.subject}</h4>
        <p><strong>Title: </strong>{course.title}</p>
        <br />
        <p>Total Hours : {course.totalHours}
        <br />
        </p>
        <p> Ratings : {course.ratings}</p>
        <br/>
        <p>Price: {course.price}</p>
        <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default CourseDetailsprice