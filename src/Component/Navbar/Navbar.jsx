import React from "react";
import c from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = (props) =>{
return <div className={c.Navbar} >
    <Navbarmap name={props.nav[0].name} to={props.nav[0].to} img={props.nav[0].img} />
    <Navbarmap name={props.nav[1].name} to={props.nav[1].to} img={props.nav[1].img} />
    <Navbarmap name={props.nav[2].name} to={props.nav[2].to} img={props.nav[2].img} />
    <Navbarmap name={props.nav[3].name} to={props.nav[3].to} img={props.nav[3].img} />
</div>
}

const Navbarmap = (props) => {
    return <NavLink className={c.NavLink} to={props.to} >{props.name}</NavLink>
}

export default Navbar;