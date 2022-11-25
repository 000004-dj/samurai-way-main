import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import state from "../../../redux/state";




const MyPosts = () => {

    return (
        <div className={s.posts}>
            <h2>MY POSTS</h2>
            <div className={s.item}>
                <h4>New Post</h4>
                <textarea placeholder={"What new?"}><input type="text"/></textarea>
                <button className={s.button}>Published</button>
            </div>

            {
                state.profilePage.postsData.map(i => {
                   return  <Post message={i.message} likes={i.likes}/>
                })}


        </div>
    )
}

export default MyPosts