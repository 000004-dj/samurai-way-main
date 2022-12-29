import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {InitialStateType} from "../../../redux/profile-reducer";

type PropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    profilePage: InitialStateType
    newPostsText: string
}



const MyPosts = (props: PropsType) => {


    let addPostText = () => {
        props.addPost()
    }

    let onPostsChanges = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)

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

                <button className={s.button} onClick={addPostText}>Published</button>
            </div>

            {
                props.profilePage.postsData.map((i: any) => {
                    return <Post key={i.id} message={i.message} likes={i.likes}/>
                })}

        </div>
    )
}

export default MyPosts