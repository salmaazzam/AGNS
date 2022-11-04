import { Link } from 'react-router-dom'

const Topbar= () => {
  return(
    <header>
        <div className="container">
        <Link to ="/">
          <h1>Welcome</h1>
        </Link>
        </div>
    </header>
  )
}

export default Topbar