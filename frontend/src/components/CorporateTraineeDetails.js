import { useCorporateTraineesContext } from "../hooks/useCorporateTraineesContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CorporateTraineeDetails = ({ corporateTrainee }) => {
  const { dispatch } = useCorporateTraineesContext()

  const handleClick = async () => {
    const response = await fetch('/corporatetrainee/' + corporateTrainee._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_CORPORATETRAINEE', payload: json})
    }
  }
    return (
      
      <div className="CorporateTrainee-details">
        <h4>{corporateTrainee.name}</h4>
        <p><strong>Username: </strong>{corporateTrainee.username}</p>
        <p>{formatDistanceToNow(new Date(corporateTrainee.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default CorporateTraineeDetails