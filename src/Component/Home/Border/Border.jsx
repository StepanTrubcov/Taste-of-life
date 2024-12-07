import './Border.css'
import React from "react"
import { NavLink } from "react-router-dom";

const Border = (props) => {
    return <NavLink className="navLink" to={props.to} >
    <div className={props.style} >
        <div>
           <p className="name" >{props.name}</p>
        </div>
        <div className="information" >
            <p className="text" >{props.text}</p>
        </div>
        <p className="number" >{props.id}</p>
    </div>
    </NavLink>
}

export default Border;