import {authAPI} from './../api/api'

 const SET_USER_DATA = 'SET_USER_DATA';
 
 let initialState = {
      id: 2,
      email: null,
      login: null,
      isAuth: false
      
  }
 
 const authReducer = (state = initialState, action) => {
    switch(action.type) {
       case SET_USER_DATA:
         return {
           ...state, 
           ...action.data,
           isAuth: true
          }
        default:
            return state;

    }
      
}
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login}});
  
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then(Response => {
    if (Response.data.resultCode === 0) {
      let {id, login, email} = Response.data.data
      dispatch(setAuthUserData(id, email, login))
    }
}) 
}


export default authReducer;