import React from "react";
import {StoreType} from "../../redux/store";
import {newMessageTextActionCreator, sendMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: StoreType
}

export function DialogsContainer(props: PropsType) {

    const state = props.store.getState().dialogPage

    const onSendMessage = () => {
        props.store.dispatch(sendMessageTextActionCreator())
    }

    const onSendChange = (text: string) => {
        props.store.dispatch(newMessageTextActionCreator(text))
    }

    return (
        <Dialogs
            state={state}

            onSendMessage={onSendMessage}
            onSendChange={onSendChange}
        />

    )
}