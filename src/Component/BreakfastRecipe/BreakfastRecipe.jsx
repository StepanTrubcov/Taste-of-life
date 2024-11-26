import React, { useState } from "react";
import End from "../End/End";
import c from './BreakfastRecipe.module.css'
import Steps from './Steps/Steps'

const BreakfastRecipe = (props) => {

    // const [ingridients,setIngridients] = useState()
    
    // const ingridientssad = () =>{
    //     props.ingridients.forEach(element => {
    //         debugger
    //         return setIngridients(element);
    //     });
    // }

    const steps = props.inf.map((s)=>(<Steps name={s.name} img={s.img} text={s.text} />))
    return <div>
        <End to="/recipes" />
        <div>
            <div className={c.name}>{props.name}</div>
            <div className={c.imgDiv} ><img className={c.img} src={props.img} /> <div className={c.ingridients} >{props.ingridients}</div> </div>
        </div >
        <div className={c.steps} >{steps}</div>
    </div>
}


export default BreakfastRecipe;