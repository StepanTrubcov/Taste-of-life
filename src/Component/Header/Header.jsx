import React from "react";
import c from './Header.module.css'

const Header = (props) => {
    return <div>
        <div></div>
    <div className={c.header} >
        <div class={c.sign}>
            <span class={c.sign_word} >Вкус Жизни</span>
        </div>
        <div class={c.sign_text}><span >Питайтесь правильно, живите лучше!</span></div>
    </div>
    </div>
}

export default Header;