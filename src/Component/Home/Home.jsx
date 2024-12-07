import React from "react";
import c from './Home.module.css'
import Border from "./Border/Border";
import { NavLink } from "react-router-dom";

const Home = (props) => {

    return <div >
        <div className={c.home} >Главная</div>
        <div className={c.div}>
            {props.home.map(h =>(
                <Border name={h.name} img={h.img} text={h.text} to={h.to} style={h.style} />
            ))}
        </div>
        <div className={c.blok} >
        <p className={c.Thank} >Спасибо, что посетили наш сайт!</p>
            <p className={c.text} >Надеемся, вы нашли вдохновение для создания вкусных и полезных блюд.</p>
        </div>
    </div>
}

export default Home;