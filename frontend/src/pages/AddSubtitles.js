
import { useState } from "react"
import Axios from "axios"
import {useLocation} from "react-router-dom";



const AddSubtitles = () => {


    const [Subtitle, setSubtitle]= useState('');
    const [Video, setVideo]= useState('');
    const [Hours, setHours]= useState('');




    const submitSubtitle = async (e) => {
        console.log("SALOMA NONI AYOYA")
        console.log(location)
        e.preventDefault()
        // Axios.post("/exercise/question",{
        //     question:Question, answer1:Answer1, answer2:Answer2,
        //      answer3:Answer3, answer4:Answer4, solution:Correct ,ExId:location.state.id
        
        //     }).then(res =>{ console.log('postinggggggg exercise',res.data)
        //     setQuestion('');
        //     setanswer1('')
        //     setanswer2('')
        //     setanswer3('')
        //     setanswer4('')
        
        // }
        //     ).catch(err => console.log(err))



    }


    return(

        
        <div className="AddSubtitles">
            <form>
                <label>Add your subtitle here:</label>
                <br/>
                <input type="text"  value={Subtitle} onChange={(e) => setSubtitle(e.target.value)}></input>

                <label>Video link here:</label>
                <br/>
                <input type="text" value={Video} onChange={(e) => setVideo(e.target.value)}></input>

                <label>Total hours here:</label>
                <br/>
                <input type="text" value={Hours} onChange={(e) => setHours(e.target.value)}></input>
            

                <button type = "button" onClick={submitSubtitle}>Add Subtitle!</button>


            </form>


        </div>

    )



}



export default AddSubtitles