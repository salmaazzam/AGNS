import React, { useEffect } from "react";
import { useState } from "react"
import axios from "axios";
import ReportDetails from '../components/ReportDetails'
import { useNavigate } from "react-router-dom";

//const {type, problem,userID,course, courseid} = req.body
const AdminReports =()=>{
    const Navigate= useNavigate()
    const[reports, setReports]= useState('')
    useEffect(()=>{
        axios.get("/report/allreports").then(res=>{
            setReports(res.data)
            console.log(reports)
        })
    })

    const back = ()=>{
        Navigate("/admin/addAdmin")
    }
    return(
        <div className="AdminReports">
            <button type="button" onClick={back}>Back</button>
            {reports&&reports.map(report=>(
                  <ReportDetails report={report} key={report._id} />
            ))}
        </div>
    )
}

export default AdminReports;