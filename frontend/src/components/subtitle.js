
import YoutubeEmbed from "../components/YoutubeEmbed";

// date fns

const subtitle = ({ subtitleInput }) => {
    return (
      
      <div className="course-details">
        <h4>{subtitleInput.subtitle}</h4>
        <p><strong>Desccription: </strong>{subtitleInput.description}</p>
        <br />
        <p>Hours : {subtitleInput.hours}</p>
        <p><strong>Video:</strong> </p>
        <YoutubeEmbed embedId = {subtitleInput.link}/>
      </div>
    )

  }
  
  export default subtitle