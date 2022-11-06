import { useEffect } from "react"
import { useAdminsContext } from "../hooks/useAdminsContext"
//components
import AdminDetails from '../components/AdminDetails'
import AdminForm from "../components/AdminForm"


const AddAdmin = () => {
  const { admins, dispatch } = useAdminsContext()
  
    useEffect(() => {
      const fetchAdmins = async () => {
        const response = await fetch('/admin')
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'SET_ADMINS', payload: json})
        }
      }
  
      fetchAdmins()
    }, [dispatch])


    return (
    
     <div className="admin">
      <div className="admins">
        <h3>All admins:</h3>
        {admins && admins.map(admin => (
          <AdminDetails admin={admin} key={admin._id} />
        ))}
        </div>
        <AdminForm />
      </div>
    
    )
}

export default AddAdmin