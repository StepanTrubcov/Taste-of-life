
import c from './Steps.module.css'

const Steps = (props) =>{
    return<div className={c.blok} >
        <div className={c.number} >{props.name}</div>
        <div><img className={c.img} src={props.img} /></div>
        <div>{props.text}</div>
    </div>
}

export default Steps;