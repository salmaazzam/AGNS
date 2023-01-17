import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";

const Topbar= () => {
  const Navigate = useNavigate();
  const {logout} = useLogout()
  const { user } = useAuthContext() 
  const handleClick = () =>{
   logout()
   Navigate("/")
  }

  return(
    <header>
        <div className="container">
        <Link to ="/">
          <h1>Welcome</h1>
        </Link>
        <nav>
          {user && (
          <div>
            <span>{user.username}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
          )}
          {!user && (
          <div>
            <Link to= "/login">Login</Link>
            <Link to= "/signup">Signup</Link>
          </div>
          )}
          
        </nav>
        </div>
    </header>
  )
}


export default Topbar