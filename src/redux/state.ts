import {v1} from "uuid";
type DialogItemDataType = {
    name: string
    id: number
    userAvatar: string
}
type MessagesDataType = {
    id: number
    message: string
}
type PostsDataType = {
    id: number
    message: string
    likes: string
}
type DialogPageType = {
    dialogItemData: Array<DialogItemDataType>
    messagesData: Array<MessagesDataType>
}
type ProfilePageType = {
    postsData: Array<PostsDataType>
}
type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

let state: RootStateType = {
    profilePage: {
        postsData: [
            {
                id: 1,
                message: "Hello, Props!",
                likes: "23",
            },
            {
                id: 2,
                message: "Wow, its cool!",
                likes: "28",
            },

        ],
    },
    dialogPage: {
        dialogItemData: [
            {
                name: "Sam",
                id: 1,
                userAvatar: "https://tiny.cc/public/images/robot_small.png",

            },
            {
                name: "Alena",
                id: 2,
                userAvatar: "https://shorturlbot.com/wp-content/uploads/2020/05/faq.png",

            },
            {
                name: "Cat",
                id: 3,
                userAvatar: "https://global-uploads.webflow.com/5f68a65d0932e3546d41cc61/5f9abc8e946c86c2ccc0e6f6_1603976334184-short-url-link-shortener-best-shopify-apps.png",
            },

        ],
        messagesData: [
            {
                id: 1,
                message: "Hello, men!",
            },
            {
                id: 2,
                message: "How are You?",
            },
            {
                id: 3,
                message: "Bla...",
            },
            {
                id: 4,
                message: "Boring",
            },
            {
                id: 5,
                message: "Hey, are you here?",
            },
        ],
    }
}


export default state