import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { DialogPageType} from "../../redux/store";


type PropsType = {
    onSendMessage: () => void
    onSendChange: (text: string) => void
    state: DialogPageType
}

export function Dialogs(props: PropsType) {

    let newMessageBody = props.state.newMessageText

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
                    props.state.dialogItemData.map(i => {
                        return <DialogItem name={i.name} id={i.id} userAvatar={i.userAvatar}/>
                    })}
            </div>
            <div className={s.messages}>
                {
                    props.state.messagesData.map(i => {
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