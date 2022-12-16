import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StoreType} from "../../redux/state";
import {newMessageTextActionCreator, sendMessageTextActionCreator} from "../../redux/dialogs-reducer";
// import {v1} from "uuid";
// import {renderEntireTree} from "../../index";

type PropsType = {
    store: StoreType
}

export function Dialogs(props: PropsType) {

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageTextActionCreator())
    }

    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.store.dispatch(newMessageTextActionCreator(text))
        // props.store.getState().dialogPage.messagesData.push({id: v1(), message: text})
        // addMessage.current.value = ''
        // renderEntireTree(props.store)
    }


    let newMessageBody = props.store.getState().dialogPage.newMessageText

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