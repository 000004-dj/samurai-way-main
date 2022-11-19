import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h2>MY POSTS</h2>
            <div className={s.item}>
               <h4>New Post</h4>
                <textarea placeholder={"What new?"} ><input type="text" /></textarea>

                <button className={s.button}>Published</button>
            </div>
            <Post message = 'Hello, Props!' likes = '23'/>
            <Post message = 'Wow, its cool!' likes = '28'/>
        </div>
    )
}

export default MyPosts