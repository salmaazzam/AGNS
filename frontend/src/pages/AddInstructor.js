import { useEffect } from "react"
import { useInstructorsContext } from "../hooks/useInstructorsContext"
//components
import InstructorDetails from '../components/InstructorDetails'
import InstructorForm from "../components/InstructorForm"
import { useNavigate } from "react-router-dom"


const AddInstructor = () => {
  const { instructors, dispatch } = useInstructorsContext()
  const Navigate = useNavigate();
    useEffect(() => {
      const fetchInstructors = async () => {
        const response = await fetch('/instructor')
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'SET_INSTRUCTORS', payload: json})
        }
      }
  
      fetchInstructors()
    }, [dispatch])

    const back =()=>{
      Navigate("/admin/addAdmin")
    }

    return (
    
     <div className="instructor">
      <div className="instructors">
        <h3>All instructors:</h3>
        <button type="button" onClick={back}>Back</button>
        {instructors && instructors.map(instructor => (
          <InstructorDetails instructor={instructor} key={instructor._id} />
        ))}
        </div>
        <InstructorForm />
      </div>
    
    )
}

export default AddInstructor