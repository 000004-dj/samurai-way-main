import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType, store, StoreType} from "./redux/state"


export let renderEntireTree = (state: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'))
}




renderEntireTree(store)
store.subscribe(renderEntireTree)
