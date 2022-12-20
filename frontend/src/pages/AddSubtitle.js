import { useNavigate } from "react-router-dom"


import { useState } from "react"
import Axios from "axios"
import {useLocation} from "react-router-dom";

const AddSubtitle = () =>{
    //const {CID, subtitle, video, hours, description } = req.body

    // const [CID, setCID]= useState('');
    const [subtitle, setSubtitle]= useState('');
    const [video, setVideo]= useState('');
    const [hours, setHours]= useState('');
    const [description, setDescription]= useState('');

    const location = useLocation()

    const addSubtitle = async (e) => {
        e.preventDefault()
        Axios.post("/course/insertsubtitle",{
           CID:location.state.id,subtitle, video, hours, description
            }).then(res =>{ console.log('posting subtitleeeee',res.data)
            // setCID('');
            setSubtitle('')
            setVideo('')
            setHours('')
            setDescription('')
        
        }
            ).catch(err => console.log(err))




    }

    return(
          <div className="AddQuestion">
            <form>
                <label>Add subtitle:</label>
                <br/>
                <input type="text"  value={subtitle} onChange={(e) => setSubtitle(e.target.value)}></input>
            
                <label>Add video:</label>
                <br/>
                <input type="text"  value={video} onChange={(e) => setVideo(e.target.value)}></input>
            
                <label>Add hours:</label>
                <br/>
                <input type="text"  value={hours} onChange={(e) => setHours(e.target.value)}></input>

                <label>Add description:</label>
                <br/>
                <input type="text"  value={description} onChange={(e) => setDescription(e.target.value)}></input>
            


                <button type = "button" onClick={addSubtitle}>Add Subtitle</button>


            </form>


        </div>
     
      
    )
}
export default AddSubtitle
