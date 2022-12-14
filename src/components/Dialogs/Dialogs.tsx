import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {RootStateType, StoreType} from "../../redux/state";
import {v1} from "uuid";
import {renderEntireTree} from "../../index";

type PropsType = {
    store: StoreType
}

export function Dialogs(props: PropsType) {

    let addMessage: any = React.createRef()
    let addText = () => {
        debugger
        let text = addMessage.current.value
        props.store.getState().dialogPage.messagesData.push({id: v1(), message: text})
        addMessage.current.value = ''
        renderEntireTree(props.store)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {
                    props.store.getState().dialogPage.dialogItemData.map(i => {
                        return <DialogItem name={i.name} id={i.id} userAvatar={i.userAvatar}/>
                    })}
            </div>
            <div className={s.messages}>
                {
                    props.store.getState().dialogPage.messagesData.map(i => {
                        return <Message key={i.id} message={i.message}/>
                    })}
                <textarea ref={addMessage}>

                </textarea>
                <button onClick={addText}>PUSH</button>
            </div>
        </div>
    )
}