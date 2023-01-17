import { useState, useEffect } from "react"
import { useLogin } from "../hooks/useLogin"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

const Login = () =>{
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const{login, isLoading, error,type} = useLogin()
    const Navigate= useNavigate()

    useEffect(()=>{
      switch(type)
      {
       case 1:Navigate('/instructor');break;
       case 2:Navigate('/individual');break;
       case 3:Navigate('/corpHome');break;
       case 4:Navigate('/admin/addAdmin');break;
      }
    })

    const handleSubmit = async (e) => {
       e.preventDefault()
       await login(username,password)

       
    }
    console.log(type)

    return(
     <form className="login" onSubmit={handleSubmit}>
       <h3> Login </h3>
       <label> username: </label>
       <input
         type="string"
         onChange={(e)=> setUsername(e.target.value)}
         value={username}
       />
       <label> Password: </label>
       <input
         type="password"
         onChange={(e)=> setPassword(e.target.value)}
         value={password}
       />
       <button disabled={isLoading}>Login</button>
       <br/>
       <Link to="/signup">Dont have an account ? signup now</Link>
       <br/>
       <Link to="/forgetPass">Forgot Password</Link>
       {error && <div className="error">{error}</div>}
       
     </form>
    )
}
export default Login