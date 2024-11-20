import React from "react";
import c from './Recipes.module.css'
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/NavbarConteiner";

const Recipes = (props) =>{
    return<div>
        <div className={c.home}>
            Рецепты
        </div>
        <Navbar/>
    <div className={c.recipes} >
        <RecipesMap name={props.recipes[0].name} text={props.recipes[0].text} img={props.recipes[0].img} />
        <RecipesMap name={props.recipes[1].name} text={props.recipes[1].text} img={props.recipes[1].img}/>
        <RecipesMap name={props.recipes[2].name} text={props.recipes[2].text} img={props.recipes[2].img}/>
        <RecipesMap name={props.recipes[3].name} text={props.recipes[3].text} img={props.recipes[3].img}/>
    </div>
    </div>
}

const RecipesMap = (props) =>{
    return<NavLink className={c.NavLink} >
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

export default Recipes;