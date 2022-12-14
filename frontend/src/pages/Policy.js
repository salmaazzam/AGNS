import { useNavigate } from "react-router-dom"

const Policy = () =>{
    const Navigate=useNavigate();
    const Back = () =>{
        Navigate('/signup')
    }
    return(
        <div>
        <p> Policy of our website blah blah blah</p>
        <button onClick={Back}>
            Go Back
        </button>
        </div>
      
    )
}
export default Policy
