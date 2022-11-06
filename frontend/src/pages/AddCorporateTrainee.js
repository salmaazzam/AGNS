import { useEffect } from "react"
import { useCorporateTraineesContext } from "../hooks/useCorporateTraineesContext"
//components
import CorporateTraineeDetails from '../components/CorporateTraineeDetails'
import CorporateTraineeForm from "../components/CorporteTraineeForm"


const AddCorporateTrainee = () => {
  const { corporateTrainees, dispatch } = useCorporateTraineesContext()
  
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


    return (
    
     <div className="corporateTrainee">
      <div className="corporateTrainees">
        <h3>All CorporateTrainees:</h3>
        {corporateTrainees && corporateTrainees.map(corporateTrainee => (
          <CorporateTraineeDetails corporateTrainee={corporateTrainee} key={corporateTrainee._id} />
        ))}
        </div>
        <CorporateTraineeForm />
      </div>
    
    )
}

export default AddCorporateTrainee