import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from "./UsersReducer";
import authReducer from './authReducer'
import thunkMiddlware from "redux-thunk"


let reducers = combineReducers({
    profilePage: profileReducer, 
    MessagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));


window.store = store;

export default store;