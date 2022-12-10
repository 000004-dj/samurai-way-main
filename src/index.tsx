import React from 'react';
import './index.css';
import state, {RootStateType, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostsText} from "./redux/state"


let renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostsText={updateNewPostsText}
                 newPostsText={state.profilePage.newPostsText}/>
        </BrowserRouter>, document.getElementById('root'))
}


renderEntireTree(state)
subscribe(renderEntireTree)
