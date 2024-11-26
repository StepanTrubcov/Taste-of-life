import React, { useState }  from "react";
import c from './Breakfast.module.css'
import Navbar from "../Navbar/NavbarConteiner";
import BreakfastMap from "./BreakfastMap/BreakfastMap";
import End from "../End/End";
import BreakfastRecipe from "../BreakfastRecipe/BreakfastRecipe";

const Breakfast = (props) => {
    const [rr, rrf] = useState(false)
    const [number, setNumber] = useState(0)

    const functio = (props) => {
            rrf(true) 
            setNumber(props)
}

    if (rr == true) {
        return <div> <BreakfastRecipe ingridients={props.breakfast[number].ingridients} name={props.breakfast[number].name} img={props.breakfast[number].img} inf={props.breakfast[number].inf} /></div>
    }

    return <div className={c.home}>
        <div className={c.breakfast} >Завтраки</div>
        <div className={c.navbar}>
            <End to="/recipes" />
            <Navbar />
            </div>
        <div className={c.number} >Всего:{props.breakfast.length}</div>
        <div className={c.blocks} >
            {
                props.breakfast.map((b) => (
                    <BreakfastMap func={functio} name={b.name} img={b.img} text={b.text} id={b.id} time={b.time} />
                ))
            }
        </div>
    </div>
}

export default Breakfast;