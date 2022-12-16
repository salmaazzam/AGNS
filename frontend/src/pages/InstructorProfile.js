import InstructorDetails from '../components/InstructorDetails'
import EditProfile from '../components/EditProfile'
import { useAuthContext } from '../hooks/useAuthContext'



const InstructorProfile =()=>{
    const user = useAuthContext();
    return(
       <div>
        <p><strong>My Profile</strong></p>
        {/* <InstructorDetails Instructor={user}></InstructorDetails> */}
        <EditProfile id={"123456"}></EditProfile>
       </div>

    )
}

export default InstructorProfile