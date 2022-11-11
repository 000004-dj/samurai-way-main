import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={classes.posts}>
            my posts
            <div className={classes.item}>
                new post
            </div>
            <Post message = 'Hello, Props!' likes = '23'/>
            <Post message = 'Wow, its cool!' likes = '28'/>
        </div>
    )
}

export default MyPosts