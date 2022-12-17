import InstructorDetails from '../components/InstructorDetails'
import EditProfile from '../components/EditProfile'
import { useAuthContext } from '../hooks/useAuthContext'



const InstructorProfile =()=>{
    const user = useAuthContext();
    return(
       <div>
        <p><strong>My Profile</strong></p>
        {/* <InstructorDetails Instructor={user}></InstructorDetails> */}
        <EditProfile id={"636e4c6ec3a1faa23d6fa918"}></EditProfile>
       </div>

    )
}

export default InstructorProfile