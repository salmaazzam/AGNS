import { useEffect } from "react"
import { useAdminsContext } from "../hooks/useAdminsContext"
//components
import AdminDetails from '../components/AdminDetails'
import AdminForm from "../components/AdminForm"
import { useNavigate } from "react-router-dom"


const AddAdmin = () => {
  const { admins, dispatch } = useAdminsContext()
  const Navigate = useNavigate();
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

    const reports=()=>{
      Navigate("/admin/reports")
    }

    const Instruc=()=>{
      Navigate("/admin/addInstructor")
    }

    const Corp=()=>{
      Navigate("/admin/addCorporateTrainee")
    }

    return (
    
     <div className="admin">
      <div className="admins" >
        <h3>All admins:</h3>
        <button type="button" onClick={reports}>View Reports</button> &nbsp;&nbsp;
        <button type="button" onClick={Instruc}>Add Instructors</button>&nbsp;&nbsp;
        <button type="button" onClick={Corp}>Add Corporate Trainees</button>
        {admins && admins.map(admin => (
          <AdminDetails admin={admin} key={admin._id} />
        ))}
        </div>
        <AdminForm />
        
      </div>
      
    
    )
}

export default AddAdmin