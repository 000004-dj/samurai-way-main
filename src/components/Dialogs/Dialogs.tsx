import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {RootStateType} from "../../redux/state";

type PropsType = {
    state: RootStateType
}

export function Dialogs(props: PropsType) {

    let addMessage: any = React.createRef()
    let addText = () => {
        let text = addMessage.current.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {
                    props.state.dialogPage.dialogItemData.map(i => {
                        return <DialogItem name={i.name} id={i.id} userAvatar={i.userAvatar}/>
                    })}
            </div>
            <div className={s.messages}>
                {
                    props.state.dialogPage.messagesData.map(i => {
                        return <Message message={i.message}/>
                    })}
                <textarea ref={addMessage}>

                </textarea>
                <button onClick={addText}>PUSH</button>
            </div>
        </div>
    )
}