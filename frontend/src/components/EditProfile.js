import { useState } from 'react'
import axios from 'axios'

const EditProfile = ({id})=>{
    const [bio, setBio]= useState('')
    const [email, setEmail]= useState('')
    const [emptyFields, setEmptyFields] = useState([])
    const testID = "636e4c6ec3a1faa23d6fa918";
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.token
    //console.log(token)
    //const api = new axios.create

    const BioUpdate = ()=>{
        axios.post('/instructor/bio',{newBio:bio},
        {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res=>{
            console.log("bioUpdated!")
            console.log(res)
            setBio("");
        })

    }
    const EmailUpdate = ()=>{
        axios.post('/instructor/email',{ newEmail:email},
        {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res=>{
            console.log("EmailUpdated!")
            setEmail("");
        })
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