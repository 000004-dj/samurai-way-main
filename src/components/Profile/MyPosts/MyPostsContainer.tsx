import React from "react";
import {
    addPostActionCreator, InitialStateType,
    onPostsChangesActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    profilePage: InitialStateType,
    newPostsText: string,
}
type mapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        newPostsText: state.profilePage.newPostsText
    }
}
const mapDispatchToProps= (dispatch: Dispatch): mapDispatchPropsType=> {
    return {
        updateNewPostText: (text: string) => {
            dispatch(onPostsChangesActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer