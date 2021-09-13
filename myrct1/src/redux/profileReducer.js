 
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
  newPostText: 'Hi' }
 
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
        default:
            return state;

    }
      
}
export const addPostActionCreator = () => {
    return {
      type: 'ADD-POST',
    }
  };
  
 export const updateNewPostTextCreator = (text) => {
    return {
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text,
    }
  };

export default profileReducer;