import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import ExerciseDetails from "../components/ExerciseDetails";

const Exercise=() =>{
  const Navigate = useNavigate();
  const finishEx =()=>{
    axios.post("/course/solve",{
      CID:location.state.id
    },{ headers: { Authorization: `Bearer ${token}`}}).then(res=>{
      setExercises(res.data)
    }).then(Navigate('/individual'))
  }
  const curruser = JSON.parse(localStorage.getItem('user'))
  const token = curruser.token
  const location = useLocation();
  const [currExercises, setExercises]= useState("");
  useEffect=()=>{
    axios.post("/course/getEx",{
      CID:location.state.id}
      ,{ headers: { Authorization: `Bearer ${token}`}}).then(res=>{
        setExercises(res.data)
       // console.log(exercises)
      })
  }



  return (
    <div className="Exercises">
      <p>
      {currExercises && currExercises.map(exercise => (
        <ExerciseDetails Exercise={exercise} key={exercise._id} />
      ))}
      </p>
      <button type="button" onClick={finishEx}>Finish Exercise</button>

    </div>
  )
  }
export default Exercise;