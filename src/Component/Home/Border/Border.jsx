import React from "react"
import c from './Border.module.css'
import { NavLink } from "react-router-dom";

const Border = (props) => {
    return <NavLink className={c.NavLink} to={props.to} >
    <div className={c.blok} >
        <div>
           <p className={c.name} >{props.name}</p>
        </div>
        <div className={c.information} >
            <p className={c.text} >{props.text}</p>
            <img className={c.img} src={props.img} ></img>
        </div>
        <p className={c.number} >{props.id}</p>
    </div>
    </NavLink>
}

export default Border;