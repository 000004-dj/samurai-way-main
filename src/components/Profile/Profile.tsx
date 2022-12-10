import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import HeaderImage from "./HeaderImage/HeaderImage";
import Avatar from "./Avatar/Avatar";
import {RootStateType} from "../../redux/state"

type PropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    newPostsText:  string
    updateNewPostsText: (newText: string)=>void
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <HeaderImage/>
            <Avatar/>
            <MyPosts
                state={props.state}
                addPost={props.addPost}
                newPostsText={props.state.profilePage.newPostsText}
                updateNewPostsText={props.updateNewPostsText}
            />

        </div>
    )
}

export default Profile