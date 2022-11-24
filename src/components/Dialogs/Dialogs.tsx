import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {v1} from "uuid";


export function Dialogs() {

    const dialogItemData = [
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

    ]

    const messagesData = [
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
    ]

    return (

        <div className={s.dialogs}>

            <div className={s.dialogItem}>
                {dialogItemData.map(i => {
                        return <DialogItem name={i.name} id={i.id} userAvatar={i.userAvatar}/>
                    })}


            </div>

            <div className={s.messages}>
                {
                    messagesData.map(i => {
                        return <Message message={i.message}/>
                    })}


            </div>

        </div>

    )
}