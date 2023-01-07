import { useInstructorsContext } from "../hooks/useInstructorsContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useState } from "react"
import axios from "axios"


const InstrucProfDetails = ({ instructor }) => {
  const myRatings = []
  var ViewR = '';

  const ViewRatings =(e)=>{
    e.preventDefault();
    {instructor.rating.forEach(element => {
      myRatings.push(<p>{element}</p>)
     // myRatings.push(<br/>)
    })}
    ViewR= 'we here';
  }
  
  if(ViewR)
  {
    return(
      <div className="instructor-details">
        <h4>{instructor.name}</h4>
        <p><strong>Username: </strong>{instructor.username}</p>
        <p><strong>Bio: </strong>{instructor.biorgaphy}</p>
        <p><strong>Email: </strong>{instructor.email}</p>
        {/* <p><strong>Ratings: </strong>{instructor.rating}</p> */}
        <button type="button" onClick={ViewRatings}>Hide Ratings</button>
        {myRatings}
      </div>
    )
  }
  else{
    return (
      
      <div className="instructor-details">
        <h4>{instructor.name}</h4>
        <p><strong>Username: </strong>{instructor.username}</p>
        <p><strong>Bio: </strong>{instructor.biorgaphy}</p>
        <p><strong>Email: </strong>{instructor.email}</p>
        {/* <p><strong>Ratings: </strong>{instructor.rating}</p> */}
        <button type="button" onClick={ViewRatings}>View Ratings</button>
        {myRatings}
      </div>
    )
  }
}
  
  export default InstrucProfDetails