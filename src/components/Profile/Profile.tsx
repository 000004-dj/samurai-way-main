import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import HeaderImage from "./HeaderImage/HeaderImage";
import Avatar from "./Avatar/Avatar";
import {AddPostActionType, RootStateType, StoreType, UpdateNewPostActionType} from "../../redux/state"

type PropsType = {
    store: StoreType
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <HeaderImage/>
            <Avatar/>
            <MyPosts
                state={props.store.getState()}
                dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile