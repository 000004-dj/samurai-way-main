import React from "react";
import preloader from "../../assets/images/preloader.gif"
import s from "./preloader.module.css"




export const Preloader = () => {
    return <div>
        <img src={preloader} alt={"Loading..."} className={s.preloaderImage}/>
    </div>

}