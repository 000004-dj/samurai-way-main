import React from "react";
import {
    addPostActionCreator,
    onPostsChangesActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const postsData = store.getState().profilePage.postsData
                const newPostsText = store.getState().profilePage.newPostsText

                let addPost = () => {
                    store.dispatch(addPostActionCreator(store.getState().profilePage.newPostsText))
                }
                let updateNewPostText = (text: string) => {
                    store.dispatch(onPostsChangesActionCreator(text))
                }

                return (<MyPosts
                    updateNewPostText={updateNewPostText}
                    addPost={addPost}
                    posts={postsData}
                    newPostsText={newPostsText}
                />)
            }
        }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer