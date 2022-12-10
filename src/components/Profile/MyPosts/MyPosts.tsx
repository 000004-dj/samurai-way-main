import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {RootStateType} from "../../../redux/state";

type PropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    newPostsText: string
    updateNewPostsText: (newText: string) => void
}


const MyPosts = (props: PropsType) => {


    let addText = () => {
        props.addPost(props.state.profilePage.newPostsText)

    }

    let onPostsChanges = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostsText(e.currentTarget.value)

    }

    return (
        <div className={s.posts}>
            <h2>MY POSTS</h2>
            <div className={s.item}>
                <h4>New Post</h4>
                <textarea
                    placeholder={"What new?"}
                    onChange={onPostsChanges}
                    value={props.newPostsText}
                />

                <button className={s.button} onClick={addText} >Published</button>
            </div>

            {
                props.state.profilePage.postsData.map(i => {
                    return <Post message={i.message} likes={i.likes}/>
                })}


        </div>
    )
}

export default MyPosts