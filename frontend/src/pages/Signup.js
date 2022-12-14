import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Link } from 'react-router-dom'

const Signup = () =>{
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[gender, setGender] = useState('')
    const{signup, error, isLoading}= useSignup()

    const handleSubmit = async (e) => {
       e.preventDefault()
       await signup(firstName,lastName, username, email, password, gender)
    }

    return(
     <form className="signup" onSubmit={handleSubmit}>
       <h3> Signup </h3>
       <label> First Name: </label>
       <input
         type="text"
         onChange={(e)=> setFirstName(e.target.value)}
         value={firstName}
       />
       <label> Last Name: </label>
       <input
         type="text"
         onChange={(e)=> setLastName(e.target.value)}
         value={lastName}
       />
       <label> Username: </label>
       <input
         type="text"
         onChange={(e)=> setUsername(e.target.value)}
         value={username}
       />
       <label> Email: </label>
       <input
         type="email"
         onChange={(e)=> setEmail(e.target.value)}
         value={email}
       />
       <label> Password: </label>
       <input
         type="password"
         onChange={(e)=> setPassword(e.target.value)}
         value={password}
       />
       <label> Gender: </label>
       <input
         type="text"
         onChange={(e)=> setGender(e.target.value)}
         value={gender}
       />
     
     <div className="policy">
      
     <input type="checkbox" id="policy" name="policy" value="policy" required/>
    <Link to="/policy">I agree to the policy</Link>
     </div>


       <button disabled={isLoading}>Sign up</button>
       <br/>
       <Link to="/login">Already have an account? Login now</Link>
       {error && <div className="error">{error}</div>}
       
     </form>
    )
}
export default Signup