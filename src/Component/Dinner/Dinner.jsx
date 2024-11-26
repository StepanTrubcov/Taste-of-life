import React, { useState }  from "react";
import c from './Dinner.module.css'
import Navbar from "../Navbar/NavbarConteiner";
import DinnerMap from "./DinnerMap/DinnerMap";
import End from "../End/End";
import BreakfastRecipe from "../BreakfastRecipe/BreakfastRecipe";

const Dinner = (props) => {
//     const [rr, rrf] = useState(false)
//     const [rr0, rrf0] = useState(0)

//     const functio = (props) => {
//             rrf(true) 
//             rrf0(props)
// }
//func={functio}
//     if (rr == true) {
//         return <div> <BreakfastRecipe name={props.breakfast[rr0].name} img={props.breakfast[rr0].img} inf={props.breakfast[rr0].inf} /></div>
//     }

    return <div className={c.home}>
        <div className={c.dinner} >Обеды</div>
        <div className={c.navbar}>
            <End to="/recipes" />
            <Navbar />
            </div>
        <div className={c.number} >Всего:{props.dinner.length}</div>
        <div className={c.blocks} >
            {
                props.dinner.map((b) => (
                    <DinnerMap name={b.name} img={b.img} text={b.text} id={b.id} time={b.time} />
                ))
            }
        </div>
    </div>
}

export default Dinner;