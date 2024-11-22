import React from "react";
import c from './Recipes.module.css'
import Navbar from "../Navbar/NavbarConteiner";
import RecipesMap from './RecipesMap'

const Recipes = (props) =>{ 
    return<div>
        <div className={c.home}>
            Рецепты
        </div>
        <Navbar/>
    <div className={c.recipes} >
        {props.recipes.map((p)=>(
         <RecipesMap name={p.name} img={p.img} text={p.text} to={p.to} />
    ))}
    </div>
    </div>
}

export default Recipes;