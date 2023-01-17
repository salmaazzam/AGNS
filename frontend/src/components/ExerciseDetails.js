import { useState } from "react";

const ExerciseDetails = ({ Exercise }) => {
    const [answer, setChosen] = useState('')
    const[text,setText]=useState("")
    const[correctAnswer, setCorrect]=useState('')
    const Submit = ()=>{
        if(answer==Exercise.CorrectAnswer)
        {
            setText("Correct Answer =  ")
        }
        else
        {
            setText("Incorrect, Answer is =  ")
        }
        
            switch(Exercise.CorrectAnswer){
                case 0:setCorrect(Exercise.Answers[0]);break;
                case 1:setCorrect(Exercise.Answers[1]);break;
                case 2:setCorrect(Exercise.Answers[2]);break;
                case 3:setCorrect(Exercise.Answers[3]);break;
                default:
        }
    }   
    return (
        <div className="Exercise-Details">
            
            <h1><strong>Question: {Exercise.Question}</strong></h1>
                <br/>
                <label>1. {Exercise.Answers[0]}</label>
                <br/>
                
                <label>2. {Exercise.Answers[1]}</label>
                <br/>
                <label>3. {Exercise.Answers[2]}</label>
                <br/>
                <label>4. {Exercise.Answers[3]}</label>
                <br/>
                <select name="correctanswer" id="correctanswer"  
                value={answer} onChange={(e) => setChosen(e.target.value)}>
                    <option value="0">Answer A</option>
                    <option value="1">Answer B</option>
                    <option value="2">Answer C</option>
                    <option value="3">Answer D</option>
                </select>
                <br/>
                <p><strong>{text}{correctAnswer}</strong></p>
                <br/>
                <button type="button" onClick={Submit}>Submit Answer</button>

                <br/><br/><br/>
        </div>
      
    )
}
  export default ExerciseDetails;