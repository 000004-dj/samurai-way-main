import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import state from "../../redux/state";




export function Dialogs() {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {state.dialogPage.dialogItemData.map(i => {
                        return <DialogItem name={i.name} id={i.id} userAvatar={i.userAvatar}/>
                    })}
            </div>
            <div className={s.messages}>
                {
                    state.dialogPage.messagesData.map(i => {
                        return <Message message={i.message}/>
                    })}
            </div>
        </div>
    )
}