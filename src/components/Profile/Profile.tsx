import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import HeaderImage from "./HeaderImage/HeaderImage";
import Avatar from "./Avatar/Avatar";


const Profile = () => {
    return (
        <div className={classes.content}>
            <HeaderImage/>
            <Avatar/>
            <MyPosts/>

        </div>
    )
}

export default Profile