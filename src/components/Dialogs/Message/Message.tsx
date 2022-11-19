import s from "../Dialogs.module.css";
import React from "react";

export const Message = (props: any) => {
    return (
        <div className={s.message}>
            <p>{props.message}</p>
        </div>
    )
}