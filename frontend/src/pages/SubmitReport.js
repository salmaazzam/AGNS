import React from "react";
import { useState } from "react"
import Axios from "axios"
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";


//const {type, problem,userID,course, courseid} = req.body
const SubmitReport =()=>{
    const Navigate = useNavigate();

    const location = useLocation()

    const [TypeSet, setType]= useState('');
    const [Problem, setProblem]= useState('');
    const goBack = async (e) =>{
        Navigate('/individual')
    }
    const submitReport = async (e) =>{
        // setType(document.getElementById("select_id").value)
         console.log(TypeSet)
    }
    function handleSelectChange(event) {
        event.preventDefault();
        // if you want to support some really old IEs, add
        // event = event || window.event;
    
       setType(event.target);
    
       // var value = selectElement.value;
        // to support really old browsers, you may use
        // selectElement.value || selectElement.options[selectElement.selectedIndex].value;
        // like el Dude has suggested
    
        // do whatever you want with value
    }

    return(
        <div>
             <form>
            <label>Type of the problem</label>
            <br/>

            <select name="Type" id="Type"  onchange="handleSelectChange(event)">
                <option value="Technical">Technical</option>
                 <option value="Financial">Financial</option>
                 <option value="Other">Other</option>
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