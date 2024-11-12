import React from "react";
import c from './Home.module.css'

const Home = (props) => {
    return <div >
        <div className={c.home} >Главная</div>
        <div className={c.div}>
            <Border name={props.home[0].name} id={props.home[0].id} img={props.home[0].img} text={props.home[0].text}/>
            <Border name={props.home[1].name} id={props.home[1].id} img={props.home[1].img} text={props.home[1].text}/>
            <Border name={props.home[2].name} id={props.home[2].id} img={props.home[2].img} text={props.home[2].text}/>
            <Border name={props.home[3].name} id={props.home[3].id} img={props.home[3].img} text={props.home[3].text}/>
            <Border name={props.home[4].name} id={props.home[4].id} img={props.home[4].img} text={props.home[4].text}/>
        </div>
    </div>
}

export default Home;


const Border = (props) => {
    return <div className={c.blok} >
        <div>
           <p className={c.name} >{props.name}</p>
        </div>
        <div className={c.information} >
            <p className={c.text} >{props.text}</p>
            <img className={c.img} src={props.img} ></img>
        </div>
        <p className={c.number} >{props.id}</p>
    </div>
}