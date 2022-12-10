import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from './components/News/News'; 
import {Music} from './components/Music/Music';
import {Settings} from "./components/Settings/Settings"
import state, {RootStateType, updateNewPostsText} from "./redux/state"

type PropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    newPostsText:  string
    updateNewPostsText: (newText: string)=>void
}

function App(props: PropsType) {
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.state}/>
            <div className="app-wrapper-content">
                <Route path="/Dialogs" render={() => <Dialogs state={props.state}/>}/>
                <Route path="/Profile" render={() => <Profile
                    state={props.state}
                    addPost={props.addPost}
                    newPostsText={props.state.profilePage.newPostsText}
                    updateNewPostsText={props.updateNewPostsText}
                />}/>
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>


            </div>

        </div>
    );
}

export default App;


