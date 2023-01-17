import { useState } from "react"
import Axios from "axios"
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";



const AddPromotionAdmin = () =>{
    const Navigate = useNavigate();

    const location = useLocation()

    const [Duration, setDuration]= useState('');
    const [Start, setStart]= useState('');
    const [Percentage, setPercentage]= useState('');

    const goBack = async (e) =>{
        Navigate('/adminCourses')
    }

    const submitPromotion = async (e) => {
         console.log("submiting promotion")
         console.log(location.state.CID)
        e.preventDefault()
        Axios.post("/course/insertpromotion",{
             duration:Duration, start:Start, percentage:Percentage ,id:location.state.CID
         }).then(res =>{ console.log('postinggggggg promotion',res.data)
            setDuration('');
            setStart('')
            setPercentage('')
        }
         ).catch(err => console.log(err))



    }



    return(
        <div className="AddQuestion">
            <form>
            <label>How many days will the promotion last?</label>
            <br/>
            <input type="number"  value={Duration} onChange={(e) => setDuration(e.target.value)}></input>

            <label>When do you want the promotion to start?</label>
            <br/>
            <input type="date"  value={Start} onChange={(e) => setStart(e.target.value)}></input>

            <label>Promotion percentage?</label>
            <br/>
            <input type="number"  value={Percentage} onChange={(e) => setPercentage(e.target.value)}></input>


            <button type = "button" onClick={submitPromotion}>Add Promotion</button>

            &nbsp;&nbsp;
            <button type = "button" onClick={goBack}>Back</button>

            </form>

        </div>

    )


}


export default AddPromotionAdmin