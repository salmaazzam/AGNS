import InstructorDetails from '../components/InstructorDetails'
import InstrucProfDetails from '../components/InstrucProfDetails'
import EditProfile from '../components/EditProfile'
import { useState } from 'react'
import axios from 'axios'


const InstructorProfile =()=>{
   const [user, setUser]= useState('')
    const curruser = JSON.parse(localStorage.getItem('user'))
    const token = curruser.token
    //const api = new axios.create('')

    axios.get('/instructor/yarab',
    {
        headers: { Authorization: `Bearer ${token}` }
    }
    ).then(res=>{
        // console.log(res.data)
        setUser(res.data)
        // console.log(user._id)
    })
    


    return(
       <div>
        <p><strong>My Profile</strong></p>
        <div className="InstrucProf">
        {user &&
       <InstrucProfDetails instructor={user} key= {user._id}></InstrucProfDetails>
      }
        </div>
     
        <EditProfile id={"636e4c6ec3a1faa23d6fa918"}></EditProfile>
       </div>

    )
}

export default InstructorProfile