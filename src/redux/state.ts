import {v1} from "uuid";

type DialogItemDataType = {
    name: string
    id: string
    userAvatar: string
}
type MessagesDataType = {
    id: string
    message: string
}
type PostsDataType = {
    id: string
    message: string
    likes: number
}
type DialogPageType = {
    dialogItemData: Array<DialogItemDataType>
    messagesData: Array<MessagesDataType>
}
type ProfilePageType = {
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
    // addPost: () => void
    // updateNewPostsText: (newText: string) => void
    subscribe: (observer: any) => void
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}
export type AddPostActionType = {
    type: "ADD-POST"
    newPostsText: string
}
export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POSTS-TEXT"
    newText: string
}

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
        if (action.type === "ADD-POST") {
            this._state.profilePage.postsData.push(
                {
                    id: v1(),
                    message: this._state.profilePage.newPostsText,
                    likes: 0,
                }
            )

            this._state.profilePage.newPostsText = ""
            this._renderEntireTree(this._state)
        } else if (action.type === "UPDATE-NEW-POSTS-TEXT") {
            this._state.profilePage.newPostsText = action.newText
            this._renderEntireTree(this._state)
        }
    },
}


export const addPostActionCreator = (text:string):AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostsText: text
    }
}

export const onPostsChangesActionCreator = (text:string): UpdateNewPostActionType => {
    return {
        type:"UPDATE-NEW-POSTS-TEXT",
        newText: text,
    }
}

// let renderEntireTree = (text: any) => {
//     console.log(text)
// }

// let state: RootStateType = {
//     profilePage: {
//         postsData: [
//             {
//                 id: 1,
//                 message: "Hello, Props!",
//                 likes: 23,
//             },
//             {
//                 id: 2,
//                 message: "Wow, its cool!",
//                 likes: 28,
//             },
//
//         ],
//         newPostsText: '',
//     },
//     dialogPage: {
//         dialogItemData: [
//             {
//                 name: "Sam",
//                 id: 1,
//                 userAvatar: "https://tiny.cc/public/images/robot_small.png",
//
//             },
//             {
//                 name: "Alena",
//                 id: 2,
//                 userAvatar: "https://shorturlbot.com/wp-content/uploads/2020/05/faq.png",
//
//             },
//             {
//                 name: "Cat",
//                 id: 3,
//                 userAvatar: "https://global-uploads.webflow.com/5f68a65d0932e3546d41cc61/5f9abc8e946c86c2ccc0e6f6_1603976334184-short-url-link-shortener-best-shopify-apps.png",
//             },
//
//         ],
//         messagesData: [
//             {
//                 id: 1,
//                 message: "Hello, men!",
//             },
//             {
//                 id: 2,
//                 message: "How are You?",
//             },
//             {
//                 id: 3,
//                 message: "Bla...",
//             },
//             {
//                 id: 4,
//                 message: "Boring",
//             },
//             {
//                 id: 5,
//                 message: "Hey, are you here?",
//             },
//         ],
//     }
// }
// export default state

// export const subscribe = (observer: any) => {
//     renderEntireTree = observer
// }

// export const updateNewPostsText = (newText: string) => {
//     state.profilePage.newPostsText = newText
//     renderEntireTree(state)
// }

// export const addPost = () => {
//     state.profilePage.postsData.push(
//         {
//             id: 5,
//             message: state.profilePage.newPostsText,
//             likes: 0,
//         }
//     )
//
//     state.profilePage.newPostsText = ""
//     renderEntireTree(state)
// }
