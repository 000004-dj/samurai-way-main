import React from "react";
import {newMessageTextActionCreator, sendMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export function DialogsContainer() {

    return (
        <StoreContext.Consumer>{
            (store)=>{
                const state = store.getState().dialogPage

                const onSendMessage = () => {
                    store.dispatch(sendMessageTextActionCreator())
                }

                const onSendChange = (text: string) => {
                   store.dispatch(newMessageTextActionCreator(text))
                }
                return (
                    <Dialogs
                        state={state}

                        onSendMessage={onSendMessage}
                        onSendChange={onSendChange}
                    />)
            }}


        </StoreContext.Consumer>

    )
}