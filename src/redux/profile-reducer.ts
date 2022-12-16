import {v1} from "uuid";
import {ProfilePageType} from "./state";

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

const profileReducer = (state: ProfilePageType, action: any) => {
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