import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {StoreType} from "./store";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebarElement: sidebarReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>


export const store: StoreType = createStore(rootReducer)