import {v1} from "uuid";
import {DialogPageType} from "./state";

export type newMessageTextActionType = ReturnType<typeof newMessageTextActionCreator>
export type sendMessageTextActionType = ReturnType<typeof sendMessageTextActionCreator>

const ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

export const newMessageTextActionCreator = (text: string) => {
    return {
        type: "ADD-NEW-MESSAGE-TEXT",
        newMessText: text,
    }
}
export const sendMessageTextActionCreator = () => {
    return {
        type: "SEND-MESSAGE",
    }
}

export const dialogReducer = (state: DialogPageType, action: any) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessText
            return state;
        case SEND_MESSAGE:
            let text = state.newMessageText
            state.newMessageText = ""
            state.messagesData.push({
                id: v1(),
                message: text,
            })
            return state;
        default:
            return state;

    }
}

export default dialogReducer;