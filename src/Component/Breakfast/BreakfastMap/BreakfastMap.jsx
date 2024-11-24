import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import c from './BreakfastMap.module.css'

const BreakfastMap = (props) => {
 return <div className={c.NavLink} onClick={() => {props.func(props.id)}} >
            <div className={c.blok}>
                <img className={c.img} src={props.img} ></img>
                <div className={c.name} >{props.name}</div>
                <div className={c.text} >{props.text}</div>
                <div className={c.number} >
                    <div className={c.time} >{props.time}</div>
                </div>
            </div>
        </div>
    }

export default BreakfastMap;