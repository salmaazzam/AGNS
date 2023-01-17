import subtitle from "../components/subtitle"
import {useLocation} from "react-router-dom";

const Subtitles = ()=>{
    const location = useLocation()
    const subtitleArray= location.state.id
    console.log(subtitleArray)

    return(
        <div className="Subtitles">
            
           { subtitleArray&&subtitleArray.map(subtitleIndex=>(
            <subtitle subtitleInput={subtitleIndex}/>
           ))}
        </div>
    )
}

export default Subtitles