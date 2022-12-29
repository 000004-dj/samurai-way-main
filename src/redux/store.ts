import React from "react";
import {v1} from "uuid";
import profileReducer, {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";
import dialogReducer, {newMessageTextActionType, sendMessageTextActionType} from "./dialogs-reducer";

export type DialogItemDataType = {
    name: string
    id: string
    userAvatar: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type PostsDataType = {
    id: string
    message: string
    likes: number

}
export type DialogPageType = {
    dialogItemData: Array<DialogItemDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostsText: string

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _renderEntireTree: (text: any) => void
    subscribe: (observer: any) => void
    dispatch: (action: DispatchType) => void
    children?: React.ReactNode
}

export type DispatchType =
    sendMessageTextActionType
    | AddPostActionType
    | UpdateNewPostActionType
    | newMessageTextActionType


export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: v1(),
                    message: "Hello, Props!",
                    likes: 23,
                },
                {
                    id: v1(),
                    message: "Wow, its cool!",
                    likes: 28,
                },

            ],
            newPostsText: '',
        },
        dialogPage: {
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
    },
    _renderEntireTree(text: string) {
        console.log(text)
    },
    getState() {
        return this._state
    },
    subscribe(callback: () => void) {
        this._renderEntireTree = callback
    },

    dispatch(action) {
        debugger
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._renderEntireTree(this._state)

    },
}







