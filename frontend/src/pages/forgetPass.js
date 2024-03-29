import { useState } from "react"
import axios from "axios"


const Forgetpass = () =>{
    
    const[email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
       e.preventDefault()
       
    }
    const handleClick= async () => {
        /*const data={email:email}
        axios({
            method:"POST",
            url:'/auth/forgetpass',
            data:data, 
            headers:{'Content-Type':'application/json'}
          })
          .then(() =>{
            setLoading(false)
               })
          .catch(error => 
                {
                console.log(error)
                })*/
     const response =await fetch('/auth/forgetpass',{
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({email})
              })
          
              const json= await response.json()
          
              if(!response.ok){
                  setLoading(false)
                  setError(json.error)
              }
              if(response.ok){
                  localStorage.setItem('email', JSON.stringify(json))
          
                  //dispatch({type: 'LOGIN', payload: json})
          
                  setLoading(false)
                  alert("Email is sent successfully")
              }
          
    }

    return(
     <form className="forgetpass" onSubmit={handleSubmit}>
       <h3> Forgot password ? </h3>
       <label> Email: </label>
       <input
         type="string"
         onChange={(e)=> setEmail(e.target.value)}
         value={email}
       />
       
       <button onClick={handleClick}>Submit</button>
       {error && <div className="error">{error}</div>}
       {/* {!error && !loading &&<div className="message">check your email now</div>} */}
       
     </form>
    )
}
export default Forgetpass