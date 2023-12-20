import "./MovinglogosStyle.css"
import Samsung from "../Assats/Samsung.avif"
import Squarelogo from "../Assats/Squarelogo.jpg"
import Kajabi from "../Assats/kajabi.jpeg"
import Toyota from "../Assats/toyota.png"
import Maybach from "../Assats/maybach.png"
import NRC from "../Assats/NRC.png"

function Movinglogo(){
    return(
        <div className="move-ing">   
        <div className="Movinglogo">
        <img alt="logo" src={Samsung}></img>
        <img alt="logo" src={Squarelogo}></img>
        <img alt="logo" src={Kajabi}></img>
        <img alt="logo" src={Toyota}></img>
        <img alt="logo" src={Maybach}></img>
        <img alt="logo" src={NRC}></img>
        </div>
        <div className="Movinglogo">
        <img alt="logo" src={Samsung}></img>
        <img alt="logo" src={Squarelogo}></img>
        <img alt="logo" src={Kajabi}></img>
        <img alt="logo" src={Toyota}></img>
        <img alt="logo" src={Maybach}></img>
        <img alt="logo" src={NRC}></img>
        </div>
        </div>

    )
}

export default Movinglogo