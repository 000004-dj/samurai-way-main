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
import { StoreType} from "./redux/state"
import {AddPostActionType, UpdateNewPostActionType} from "./redux/profile-reducer";

type PropsType = {
    state: StoreType
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}

function App(props: PropsType) {
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.state.getState()}/>
            <div className="app-wrapper-content">
                <Route path="/Dialogs" render={() => <Dialogs store={props.state}/>}/>
                <Route path="/Profile" render={() => <Profile
                    store={props.state}
                    dispatch={props.dispatch}
                />}/>
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>


            </div>

        </div>
    );
}

export default App;


