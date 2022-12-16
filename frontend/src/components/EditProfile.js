import { useState } from 'react'
import axios from 'axios'

const EditProfile = ()=>{
    const [bio, setBio]= useState('')
    const [email, setEmail]= useState('')
    const [emptyFields, setEmptyFields] = useState([])
    //const api = new axios.create

    const BioUpdate = ()=>{

    }
    const EmailUpdate = ()=>{

    }
    return(
        <div className="EditProfile">
            <p>Change Bio</p>
            <input 
            type="text" 
            onChange={(e) => setBio(e.target.value)} 
            value={bio}
            className={emptyFields.includes('name') ? 'error' : ''}
            />
            <button type="button" onClick={BioUpdate}>Update Bio</button>
            <br/>
            <p>Change Email</p>
            <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            className={emptyFields.includes('name') ? 'error' : ''}
            />
            <button type="button" onClick={EmailUpdate}>Update Email</button>

        </div>
    )
}
export default EditProfile