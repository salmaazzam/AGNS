import { useState } from "react"
import Axios from "axios"
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const AddQuestions = () =>{

    const [Question, setQuestion]= useState('');
    const [Answer1, setanswer1]= useState('');
    const [Answer2, setanswer2]= useState('');
    const [Answer3, setanswer3]= useState('');
    const [Answer4, setanswer4]= useState('');
    const [Correct, setAnswer]= useState('');
    const location = useLocation()
    const Navigate = useNavigate();

    const submitQuestion = async (e) => {
        e.preventDefault()
        console.log(Correct)
        Axios.post("/exercise/question",{
            question:Question, answer1:Answer1, answer2:Answer2,
             answer3:Answer3, answer4:Answer4, solution:Correct ,ExId:location.state.id
        
            }).then(res =>{ console.log('postinggggggg exercise',res.data)
            setQuestion('');
            setanswer1('')
            setanswer2('')
            setanswer3('')
            setanswer4('')
        
        }
            ).catch(err => console.log(err))



    }

    const finishExercise = async(e)=>{
        e.preventDefault()
        Axios.post("/exercise/submit",{_id:location.state.id}).then(
            Navigate("/instructor")
        )
    }

    return(
        <div className="AddQuestion">
            <form>
                <label>Add your questions here:</label>
                <br/>
                <input type="text"  value={Question} onChange={(e) => setQuestion(e.target.value)}></input>
                <label>Answer 1 here:</label>
                <br/>
                <input type="text" value={Answer1} onChange={(e) => setanswer1(e.target.value)}></input>
                <label>Answer 2 here:</label>
                <br/>
                <input type="text" value={Answer2} onChange={(e) => setanswer2(e.target.value)}></input>
                <label>Answer 3 here:</label>
                <br/>
                <input type="text" value={Answer3} onChange={(e) => setanswer3(e.target.value)}></input>
                <label>Answer 4 here:</label>
                <br/>
                <input type="text" value={Answer4} onChange={(e) => setanswer4(e.target.value)}></input>
                <label>Correct answer is:</label>
                <br/>
                
                <select name="correctanswer" id="correctanswer"  
                value={Correct} onChange={(e) => setAnswer(e.target.value)}>
                    <option value="0">Answer A</option>
                    <option value="1">Answer B</option>
                    <option value="2">Answer C</option>
                    <option value="3">Answer D</option>
                </select>

                <button type = "button" onClick={submitQuestion}>Add Question!</button>&nbsp;&nbsp;&nbsp;
                <button type = "button" onClick={finishExercise}>Submit Exercise</button>


            </form>


        </div>

    )


}


export default AddQuestions