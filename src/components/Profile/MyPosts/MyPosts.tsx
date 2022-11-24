import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import { v1 } from "uuid";


const MyPosts = () => {

    const postsData = [
        {
            id: v1(),
            message: "Hello, Props!",
            likes: "23",
        },
        {
            id: v1(),
            message: "Wow, its cool!",
            likes: "28",
        },


    ]

    return (
        <div className={s.posts}>
            <h2>MY POSTS</h2>
            <div className={s.item}>
                <h4>New Post</h4>
                <textarea placeholder={"What new?"}><input type="text"/></textarea>
                <button className={s.button}>Published</button>
            </div>

            {
                postsData.map(i => {
                   return  <Post message={i.message} likes={i.likes}/>
                })}


        </div>
    )
}

export default MyPosts