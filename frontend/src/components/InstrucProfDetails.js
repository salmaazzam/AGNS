import { useInstructorsContext } from "../hooks/useInstructorsContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const InstrucProfDetails = ({ instructor }) => {
  const { dispatch } = useInstructorsContext()

  const handleClick = async () => {
    const response = await fetch('/instructor/' + instructor._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_INSTRUCTOR', payload: json})
    }
  }
    return (
      
      <div className="instructor-details">
        <h4>{instructor.name}</h4>
        <p><strong>Username: </strong>{instructor.username}</p>
        <p><strong>Bio: </strong>{instructor.biorgaphy}</p>
        <p><strong>Email: </strong>{instructor.email}</p>
        <p>{formatDistanceToNow(new Date(instructor.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default InstrucProfDetails