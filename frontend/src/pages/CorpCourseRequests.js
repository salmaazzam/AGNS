import { useNavigate } from "react-router-dom"
import { useEffect,useState} from "react"
import axios from 'axios'
import  CourseReq  from "../components/CourseReq"


 const CorpCourseRequests = () =>{
    const Navigate=useNavigate();
    const [requests, setRequests ]= useState([])
    axios.get("/corporatetrainee/allrequestcourse").then(res=>{
        setRequests(res.data)
       // console.log(res.data)
    //console.log(res.data[0])
    })
    return(
        <div>
           
         {requests && requests.map(request => (
           //  <CourseReq request={request} key={request.id} />
           <p></p>
            ))}
        </div>
      
    )
}
export default CorpCourseRequests
