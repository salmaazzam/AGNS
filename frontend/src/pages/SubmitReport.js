import React from "react";
import { useState } from "react"
import Axios from "axios"
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";


//const {type, problem,userID,course, courseid} = req.body
const SubmitReport =()=>{
    const curruser = JSON.parse(localStorage.getItem('user'))
    const token = curruser.token
    const Navigate = useNavigate();
    const location = useLocation()

    const [TypeSet, setType]= useState('');
    const [Problem, setProblem]= useState('');
    const goBack = async (e) =>{
        Navigate('/individual')
    }

    const submitReport = async (e) =>{
        e.preventDefault();
        console.log(location.state.id)
        console.log(Problem)
        console.log(TypeSet)
        Axios.post("/report/indiv",{
            CID: location.state.id,
            problem:Problem,
            type:TypeSet
        },{
            headers: { Authorization: `Bearer ${token}`}
        }).then(report=>console.log(report))
    }


    return(
        <div>
             <form>
            <label>Type of the problem</label>
            <br/>

            <select name="correctanswer" id="correctanswer"  
                value={TypeSet} onChange={(e) => setType(e.target.value)}>
                    <option value="technical">technical</option>
                    <option value="financial">financial</option>
                    <option value="other">other</option>
                </select>
              

            <label>What is the problem?</label>
            <input type="text"  value={Problem} onChange={(e) => setProblem(e.target.value)}></input>
            <button type = "button" onClick={submitReport}>Submit</button>
            &nbsp;&nbsp;
        <button type = "button" onClick={goBack}>Back</button>


            </form>
        </div>
    )
}

export default SubmitReport;