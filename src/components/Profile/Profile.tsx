import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import HeaderImage from "./HeaderImage/HeaderImage";
import Avatar from "./Avatar/Avatar";
import { StoreType} from "../../redux/state"
import {AddPostActionType, UpdateNewPostActionType} from "../../redux/profile-reducer";

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