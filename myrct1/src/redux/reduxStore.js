import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilePage: profileReducer, 
    MessagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    UsersPage: usersReducer
});

let store = createStore(reducers);

export default store;