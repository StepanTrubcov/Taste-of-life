import React from "react";
import c from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = (props) =>{
return <div className={c.Navbar} >
    <NavLink className={c.NavLink} to={props.nav[0].to} >{props.nav[0].name}</NavLink>
</div>
}

export default Navbar;