import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StoreType} from "./redux/store"
import {store} from "./redux/redux-store"


export let renderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'))
}


renderEntireTree(store)
store.subscribe(() => {
    renderEntireTree(store);

})
