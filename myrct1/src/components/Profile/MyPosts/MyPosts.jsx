  import classes from'./MyPosts.module.css';
  import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {
    
 
  let postsElements = props.posts.map( p => <Post message={p.message} countLike={p.countLike} />)
  
  let newPostElement = React.createRef();
  let onAddPost = () => {
       /* let text = newPostElement.current.value; */
      props.addPost();
      /*  props.dispatch(addPostActionCreator()); */
      /*  props.dispatch('');    */
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTextCreator(text);
    /* let action = updateNewPostTextCreator(text);
    props.dispatch(action); */
  }
  return (

      <div className={classes.postBlock}>
       <h2> My posts</h2>
        <div>
       add New post 
      </div>
      <div>
        <div>
        <textarea onChange= {onPostChange }  ref={newPostElement}   
        value={props.newPostText} />
        </div>
        
        <button onClick={ onAddPost }>add post</button>
        
      </div>
      <div className={classes.Posts}>  
      
     { postsElements }

      </div>
     
    </div>
    );
}
export default MyPosts;