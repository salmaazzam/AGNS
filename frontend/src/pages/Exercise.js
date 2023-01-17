import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";

const Exercise=() =>{
  const curruser = JSON.parse(localStorage.getItem('user'))
  const token = curruser.token
  const location = useLocation();
  const [exercises, setExercises]= useState("");
  useEffect=()=>{
    axios.post("/course/getEx",{
      CID:location.state.id}
      ,{ headers: { Authorization: `Bearer ${token}` }}).then(res=>{
        setExercises(res.data)
        console.log(exercises)
      })
  }



  return (
    <div className="Exercises">


    </div>
  )
  }
export default Exercise;