import React from "react";
import { NavLink } from "react-router-dom";
import c from './BreakfastMap.module.css'

const BreakfastMap = (props) =>{
    return <NavLink className={c.NavLink} >
        <div className={c.blok}>
            <img className={c.img} src={props.img} ></img>
            <div className={c.name} >{props.name}</div>
            <div className={c.text} >{props.text}</div>
            <div className={c.number} >
            <div className={c.id} >{props.id}</div>
            <div className={c.time} >{props.time}</div>
            </div>
        </div>
    </NavLink>
}

export default BreakfastMap;