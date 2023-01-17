import React from "react";
import axios from "axios"
import {useState} from "react"

const AdminViewReports =()=>{
    const [reports,setReports]=useState('');
    axios.get("/report/allreports").then(res=>{
        setReports(res.data)
      //console.log(reports[0].problem)
    })
    return(
        <div>
            All Reports:
           {reports&& reports.map(report=>(
            <p>{report.problem}</p>
           ))}
        </div>
    )
}

export default AdminViewReports;