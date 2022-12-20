import React from "react";
import {StoreType,} from "../../../redux/store";
import {
    addPostActionCreator,
    onPostsChangesActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type PropsType = {
    store: StoreType
}

const MyPostsContainer = (props: PropsType) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator(props.store.getState().profilePage.newPostsText))
    }
    let updateNewPostText = (text: string) => {
        props.store.dispatch(onPostsChangesActionCreator(text))
    }

    const postsData = props.store.getState().profilePage.postsData
    const newPostsText = props.store.getState().profilePage.newPostsText

    return (

        <MyPosts
            updateNewPostText={updateNewPostText}
            addPost={addPost}
            posts={postsData}
            newPostsText={newPostsText}
        />
    )
}

export default MyPostsContainer