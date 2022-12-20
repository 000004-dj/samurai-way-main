import React from "react";
import HeaderImage from "./HeaderImage/HeaderImage";
import Avatar from "./Avatar/Avatar";
import {StoreType} from "../../redux/store"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    store: StoreType
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <HeaderImage/>
            <Avatar/>
            <MyPostsContainer
                store={props.store}
            />

        </div>
    )
}

export default Profile