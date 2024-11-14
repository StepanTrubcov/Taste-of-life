import React from "react";
import c from './Video.module.css'
import Navbar from "../Navbar/NavbarConteiner";

const Video = (props) =>{
    const video = props.video.map(v=>{
       return <VideoMap src={v} />
    })
    return<div>
        <div className={c.name} >
            Видеоуроки и мастерклассы
        </div>
        <Navbar/>
        <div className={c.information} >
            Видео:{props.video.length}
        </div>
            <div className={c.video} >
        {video}
    </div>
    </div>
}

const VideoMap = (props) =>{
return <div >
<iframe className={c.iframe} allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  src={props.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
}

export default Video;