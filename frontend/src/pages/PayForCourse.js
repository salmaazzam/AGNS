import { useEffect,useState } from "react"
import axios from "axios"
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const PayForCourse = () => {
    const location = useLocation();
    const cid = location.state.id;
    const Navigate =useNavigate();
    const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [CVV, setCVV] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  const curruser = JSON.parse(localStorage.getItem('user'))
  const token = curruser.token

    const register = ()=>{
        axios.post("/course/register",{
            cID:cid
        },{
          headers: { Authorization: `Bearer ${token}` }
      }).then(Navigate('/individual')).catch(err=>{
            console.log(err)
        })
    }
       
    
    return (
    <div className="Register" >
        <form>
        <label>Card Holder Name</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />
      <label>Card Holder Number</label>
      <input 
        type="text" 
        onChange={(e) => setNumber(e.target.value)} 
        value={number}
        className={emptyFields.includes('number') ? 'error' : ''}
      />
      <label>CVV</label>
      <input 
        type="text" 
        onChange={(e) => setCVV(e.target.value)} 
        value={CVV}
        className={emptyFields.includes('CVV') ? 'error' : ''}
      />
       <label>Expiration Date</label>
      <input 
        type="date" 
        onChange={(e) => setDate(e.target.value)} 
        value={Date}
        className={emptyFields.includes('Date') ? 'error' : ''}
      />
           <button type ="button" onClick = {register}>Pay</button>
      {error && <div className="error">{error}</div>}
        </form>
 
    </div>
    )
}

export default PayForCourse