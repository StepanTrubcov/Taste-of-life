import React from "react";
import c from './Header.module.css'

const Header = (props) => {
    return <div className={c.header} >
        <div class={c.sign}>
            <span class={c.sign_word} >Вкус Жизни</span>
            {/* <span class={c.sign_word}>Питайтесь правильно, живите лучше!</span> */}
        </div>
    </div>;
}

export default Header;