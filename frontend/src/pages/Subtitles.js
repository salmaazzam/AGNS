
import {useLocation} from "react-router-dom";
import SubtitleDetails from '../components/SubtitleDetails'

const Subtitles = ()=>{
    const location = useLocation()
  //  const [subtitleArray, setArray]= useState([]);
    //setArray(location.state.id)
    const subtitleArray = location.state.id
 
    return(
        <div className="Subtitles">
            <p>
           { subtitleArray && subtitleArray.map(subtitleInput => (
            <SubtitleDetails subtitleInput={subtitleInput} key= {subtitleInput._id}/>
           ))}
           </p>
        </div>
    )
}

export default Subtitles