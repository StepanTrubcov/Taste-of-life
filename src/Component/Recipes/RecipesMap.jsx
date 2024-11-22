import React from "react";
import { NavLink } from "react-router-dom";
import c from './Recipes.module.css'

const RecipesMap = (props) =>{
    return<NavLink className={c.NavLink} replace to={props.to} >
            <div className={c.blok} >
        <div>
           <p className={c.name} >{props.name}</p>
        </div>
        <div className={c.information} >
            <p className={c.text} >{props.text}</p>
            <img className={c.img} src={props.img} ></img>
        </div>
    </div>
    </NavLink>
}

export default RecipesMap;