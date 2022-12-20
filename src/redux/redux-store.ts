import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebarElement: sidebarReducer
})

export const store: StoreType = createStore(reducers)