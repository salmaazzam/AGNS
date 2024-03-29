import { useAdminsContext } from "../hooks/useAdminsContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AdminDetails = ({ admin }) => {
  const { dispatch } = useAdminsContext()

  const handleClick = async () => {
    const response = await fetch('/admin/' + admin._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_ADMIN', payload: json})
    }
  }
    return (
      
      <div className="admin-details">
        <h4>{admin.name}</h4>
        <p><strong>Username: </strong>{admin.username}</p>
        <p>{formatDistanceToNow(new Date(admin.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default AdminDetails