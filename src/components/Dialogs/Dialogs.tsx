import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";


type PropsType = {
    onSendMessage: () => void
    onSendChange: (text: string) => void
    dialogPage: InitialStateType
}


export function Dialogs(props: PropsType) {

    let newMessageBody = props.dialogPage.newMessageText

    let onSendMessageClick = () => {
        props.onSendMessage()
    }

    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onSendChange(text)
    }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {
                    props.dialogPage.dialogItemData.map(i => {
                        return <DialogItem name={i.name} id={i.id} userAvatar={i.userAvatar}/>
                    })}
            </div>
            <div className={s.messages}>
                {
                    props.dialogPage.messagesData.map(i => {
                        return <Message key={i.id} message={i.message}/>
                    })}
                <textarea
                    value={newMessageBody}
                    onChange={onSendMessageChange}
                >

                </textarea>
                <button onClick={onSendMessageClick}>PUSH</button>
            </div>
        </div>
    )
}