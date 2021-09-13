
import React from 'react';
 import {addPostActionCreator} from '../../../redux/profileReducer';

 import {updateNewPostTextCreator} from '../../../redux/profileReducer';

import MyPosts from './MyPosts';
import {connect} from "react-redux"

/* const MyPostsContainer = () => {

  return ( 
    <StoreContext.Consumer>
      { (store) => {
  let state = store.getState();

  let addPost = () => {
       store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextCreator(text);
    store.dispatch(action);
  }
  
   return <MyPosts updateNewPostTextCreator={onPostChange} 
    addPost={addPost} 
    posts={state.profilePage.posts} 
  newPostText={state.profilePage.newPostText} />
       }  
      }
  
  </StoreContext.Consumer>
  );
} */
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostTextCreator: (text) => {
      let action = updateNewPostTextCreator(text);
    dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator())}
    
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;