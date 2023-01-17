import { useEffect } from "react"
import { useCorporateTraineesContext } from "../hooks/useCorporateTraineesContext"
//components
import CorporateTraineeDetails from '../components/CorporateTraineeDetails'
import CorporateTraineeForm from "../components/CorporteTraineeForm"
import { useNavigate } from "react-router-dom"


const AddCorporateTrainee = () => {
  const { corporateTrainees, dispatch } = useCorporateTraineesContext()
  const Navigate = useNavigate();
    useEffect(() => {
      const fetchCorporateTrainees = async () => {
        const response = await fetch('/corporatetrainee')
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'SET_CORPORATETRAINEES', payload: json})
        }
      }
  
      fetchCorporateTrainees()
    }, [dispatch])

    const back=()=>{
      Navigate("/admin/addAdmin")
    }

    return (
    
     <div className="corporateTrainee">
      <div className="corporateTrainees">
        <h3>All CorporateTrainees:</h3>
        <button type="button" onClick={back}>Back</button>
        {corporateTrainees && corporateTrainees.map(corporateTrainee => (
          <CorporateTraineeDetails corporateTrainee={corporateTrainee} key={corporateTrainee._id} />
        ))}
        </div>
        <CorporateTraineeForm />
      </div>
    
    )
}

export default AddCorporateTrainee