import InstructorDetails from '../components/InstructorDetails'
import InstrucProfDetails from '../components/InstrucProfDetails'
import EditProfile from '../components/EditProfile'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ReportDetails from '../components/ReportDetails'


const MyReports =()=>{
   const [reports, setReports]= useState('')
    const curruser = JSON.parse(localStorage.getItem('user'))
    const token = curruser.token
    //const api = new axios.create('')

    const Navigate= useNavigate();
    axios.get('/report/getMyReports',
    {
        headers: { Authorization: `Bearer ${token}` }
    }
    ).then(res=>{
        setReports(res.data)

    })
    
    const back =()=>{
        Navigate("/individual")
    }

    return(
       <div>
        <p><strong>My Reports</strong></p>
        <button type="button" onClick={back}>Back</button>
        <div className="Report Details">
        {reports&&reports.map(report=>(
                  <ReportDetails report={report} key={report._id} />
            ))}
        </div>
       </div>

    )
}

export default MyReports;