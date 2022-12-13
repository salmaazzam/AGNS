import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () =>{
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const{login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
       e.preventDefault()
       await login(username,password)
    }

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
       {error && <div className="error">{error}</div>}
       
     </form>
    )
}
export default Login