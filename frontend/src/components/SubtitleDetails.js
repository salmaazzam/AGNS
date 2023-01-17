
import YoutubeEmbed2 from "./YoutubeEmbed2";
import { Container, Segment } from "semantic-ui-react";
import { useState } from "react";

// date fns

const SubtitleDetails = ({ subtitleInput }) => {
  const [Userinput, setInput]= useState('');


  
const download =()=>{
const element = document.createElement('a');
console.log(Userinput)
const file = new Blob([Userinput],{
  type:"text/plain;charset-utf-8"
});
element.href = URL.createObjectURL(file);
element.download = "NewDocument.txt";
document.body.appendChild(element);
element.click();
}
    return (
      
      <div className="course-details">
        <h4>{subtitleInput.subtitle}</h4>
        <br />
        <p><strong>Desccription: </strong>{subtitleInput.description}</p>
        <br />
        <p>Hours : {subtitleInput.hours}</p>
        <p><strong>Video:</strong> </p>
        <YoutubeEmbed2 embedId = {subtitleInput.link}/>
        
        <Container>
          <Segment>
            <div>
            <textarea placeholder="Type your text here..."  
            onChange={(e) => setInput(e.target.value)}  
            value={Userinput} ></textarea>
            <button id="download" onClick ={download}>Download file</button>

            </div>
          </Segment>
        </Container>
      </div>
    )

  }
  
  export default SubtitleDetails;