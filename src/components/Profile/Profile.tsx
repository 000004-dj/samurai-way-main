import React from "react";
import HeaderImage from "./HeaderImage/HeaderImage";
import Avatar from "./Avatar/Avatar";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {

    return (
        <div>
            <HeaderImage/>
            <Avatar/>
            <MyPostsContainer/>

        </div>
    )
}

export default Profile