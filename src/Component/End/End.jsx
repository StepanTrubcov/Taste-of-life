import React from "react";
import c from './End.module.css'
import { NavLink } from "react-router-dom";

const End = (props) => {
    return <div className={c.Navbar} >
        <NavLink className={c.NavLink} to={props.to} > Назад</NavLink>
    </div>
}

export default End;