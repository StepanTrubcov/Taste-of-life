import React from "react";
import c from './Breakfast.module.css'
import Navbar from "../Navbar/NavbarConteiner";
import BreakfastMap from "./BreakfastMap/BreakfastMap";
import End from "../End/End";

const Breakfast = (props) => {
    return <div className={c.home}>
        <div className={c.breakfast} >Завтраки</div>
        <div className={c.navbar}>
            <End />
            <Navbar />
            </div>
        <div className={c.number} >Всего:{props.breakfast.length}</div>
        <div className={c.blocks} >
            {
                props.breakfast.map((b) => (
                    <BreakfastMap name={b.name} img={b.img} text={b.text} id={b.id} time={b.time} />
                ))
            }
        </div>
    </div>
}

export default Breakfast;