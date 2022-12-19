import { useState } from "react"
import axios from "axios"


const Changepass = () =>{
    
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
       e.preventDefault()
       
    }
    const handleClick= async () => {
        var user = JSON.parse(localStorage.getItem('user'));
        const username1=user.username
        const data={username:username1,password}
        axios({
            method:"PATCH",
            url:'/auth/changepass',
            data:data, 
            headers:{'Content-Type':'application/json'}
          })
          .then(() =>{
            setLoading(false)
            alert("password changed");
               })
          .catch(error => 
                {
                console.log(error)
                })
    }

    return(
     <form className="changepass" onSubmit={handleSubmit}>
       <h3> Change your password </h3>
       <label> Password: </label>
       <input
         type="password"
         onChange={(e)=> setPassword(e.target.value)}
         value={password}
       />
       <label> Confirm Password: </label>
       <input
         type="password"
         onChange={(e)=> setConfirmPassword(e.target.value)}
         value={confirmPassword}
       />
       
       <button onClick={handleClick}>Submit</button>
       {error && <div className="error">{error}</div>}
       {/* {!error && !loading &&<div className="message">check your email now</div>} */}
       
     </form>
    )
}
export default Changepass