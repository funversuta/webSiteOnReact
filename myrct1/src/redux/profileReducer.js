import {usersAPI} from './../api/api'
import {profileAPI} from './../api/api'

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

 let initialState = {
  posts: [
      {
          id: 1,
          message: 'hi, whatsup' , countLike: 12, countDislike: 0,
      },
      {
          id: 2,
          message: 'first post', countLike: 11 , countDislike: 0,
      } ],
  newPostText: 'Hi' ,
  profile: null,
  status: ""
}
 
 const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD-POST':  {
        let newPost ={
            id: 3,
            message: state.newPostText,
            countLike: 0,
            countDislike: 0
        }
        return  {
          ...state,
          posts: [...state.posts, newPost],
          newPostText: ''
        };
        
      }
        case 'UPDATE-NEW-POST-TEXT': {
       return {
          ...state,
          newPostText: action.newText
        };
}
        case SET_USER_PROFILE: {
       return {...state, profile: action.profile}
   }
   case SET_STATUS: {
    return {...state, status: action.status}
}
      default:
         return state;

    }
      
}
export const addPostActionCreator = () => {
    return {
      type: 'ADD-POST',
    }
  };
  export const setUserProfile  = (profile) => ({ type: SET_USER_PROFILE, profile})
  export const setStatus  = (status) => ({ type: SET_STATUS, status})

  export const getUserProfile  = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
       dispatch(setUserProfile(response.data));  
    }) ;
  }
  export const getStatus  = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
       dispatch(setStatus(response.data));  
    }) ;
  }
  export const updateStatus  = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
       if (response.data.resultCode === 0){
      dispatch(setStatus(status));  
    }}) ;
  }

 export const updateNewPostTextCreator = (text) => {
    return {
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text,
    }
  };

export default profileReducer;