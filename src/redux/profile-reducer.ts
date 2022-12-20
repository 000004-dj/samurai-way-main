import {v1} from "uuid";
import {ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POSTS_TEXT = "UPDATE-NEW-POSTS-TEXT"

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostActionType = ReturnType<typeof onPostsChangesActionCreator>

export const addPostActionCreator = (text: string) => {
    return {
        type: "ADD-POST",
        newText: text,
    }
}
export const onPostsChangesActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POSTS-TEXT",
        newText: text,
    }
}


let initialState = {
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
}


const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    {
        switch (action.type) {
            case ADD_POST:
                state.postsData.push(
                    {
                        id: v1(),
                        message: state.newPostsText,
                        likes: 0,
                    }
                )
                state.newPostsText = ""
                return state;
            case UPDATE_NEW_POSTS_TEXT:
                state.newPostsText = action.newText
                return state;
            default:
                return state;
        }
    }
}


export default profileReducer;