import {v1} from "uuid";
import {DialogPageType} from "./store";

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


let initialState = {
    dialogItemData: [
        {
            name: "Sam",
            id: v1(),
            userAvatar: "https://tiny.cc/public/images/robot_small.png",

        },
        {
            name: "Alena",
            id: v1(),
            userAvatar: "https://shorturlbot.com/wp-content/uploads/2020/05/faq.png",

        },
        {
            name: "Cat",
            id: v1(),
            userAvatar: "https://global-uploads.webflow.com/5f68a65d0932e3546d41cc61/5f9abc8e946c86c2ccc0e6f6_1603976334184-short-url-link-shortener-best-shopify-apps.png",
        },

    ],
    messagesData: [
        {
            id: v1(),
            message: "Hello, men!",
        },
        {
            id: v1(),
            message: "How are You?",
        },
        {
            id: v1(),
            message: "Bla...",
        },
        {
            id: v1(),
            message: "Boring",
        },
        {
            id: v1(),
            message: "Hey, are you here?",
        },
    ],
    newMessageText: "",
}

export const dialogReducer = (state: DialogPageType = initialState, action: any) => {
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