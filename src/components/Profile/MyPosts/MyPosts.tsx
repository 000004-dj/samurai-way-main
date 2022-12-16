import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {RootStateType,} from "../../../redux/state";
import {
    addPostActionCreator,
    AddPostActionType,
    onPostsChangesActionCreator,
    UpdateNewPostActionType
} from "../../../redux/profile-reducer";

type PropsType = {
    state: RootStateType
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}


const MyPosts = (props: PropsType) => {


    let addText = () => {
        props.dispatch(addPostActionCreator(props.state.profilePage.newPostsText))


    }

    let onPostsChanges = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(onPostsChangesActionCreator(e.currentTarget.value))

    }

    return (
        <div className={s.posts}>
            <h2>MY POSTS</h2>
            <div className={s.item}>
                <h4>New Post</h4>
                <textarea
                    placeholder={"What new?"}
                    onChange={onPostsChanges}
                    value={props.state.profilePage.newPostsText}
                />

                <button className={s.button} onClick={addText} >Published</button>
            </div>

            {
                props.state.profilePage.postsData.map(i => {
                    return <Post key={i.id} message={i.message} likes={i.likes}/>
                })}

        </div>
    )
}

export default MyPosts