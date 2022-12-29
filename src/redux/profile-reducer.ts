import {v1} from "uuid";
import {ProfilePageType} from "./store";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostActionType = ReturnType<typeof onPostsChangesActionCreator>

type PostsDataType = {
    id: string
    message: string
    likes: number
}
export type InitialStateType = {
    postsData: Array<PostsDataType>
    newPostsText: string
}

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POSTS_TEXT = "UPDATE-NEW-POSTS-TEXT"

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST",
    }
}
export const onPostsChangesActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POSTS-TEXT",
        newText: text,
    }
}

const initialState: InitialStateType = {
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
            case ADD_POST: {
                const newPost = {id: v1(), message: state.newPostsText, likes: 0,}
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostsText: ""
                };
            }
            case UPDATE_NEW_POSTS_TEXT:
                return {
                    ...state,
                    newPostsText: action.newText
                };
            default:
                return state;
        }
    }
}

export default profileReducer;