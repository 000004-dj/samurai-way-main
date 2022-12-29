import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import {StoreType} from "./redux/store"
import {store} from "./redux/redux-store"
import {Provider} from "react-redux";



export let renderEntireTree = (store: any) => {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        </BrowserRouter>, document.getElementById('root'))
}


renderEntireTree(store)
// store.subscribe(() => {
//     renderEntireTree(store);
//
// })
