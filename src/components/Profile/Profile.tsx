import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import HeaderImage from "./HeaderImage/HeaderImage";
import Avatar from "./Avatar/Avatar";


const Profile = () => {
    return (
        <div>
            <HeaderImage/>
            <Avatar/>
            <MyPosts/>

        </div>
    )
}

export default Profile