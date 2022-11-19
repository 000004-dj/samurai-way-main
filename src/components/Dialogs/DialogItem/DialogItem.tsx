import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = (props: any) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.userAvatar}>
                <img src={props.userAvatar} alt="USERS AVATAR"/>
            </div>
            <NavLink to={path} className={s.userName}>{props.name}</NavLink>
        </div>
    )
}