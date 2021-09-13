import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";



let store = {
    _state: {
        profilePage: {
          posts: [
              {
                  id: 1,
                  message: 'hi, whatsup' , countLike: 12, countDislike: 0,
              },
              {
                  id: 2,
                  message: 'first post', countLike: 11 , countDislike: 0,
              } ],
          newPostText: 'Hi'
          
        },
       MessagesPage:{
          dialogs: [
              {
                  id: 1,
                  name: 'George'
              },
              {
                  id: 2,
                  name: 'Dima'
              },
              {
                  id: 3,
                  name: 'NJ'
              },
              {
                  id: 4,
                  name: 'Vechaslav'
              },
              {
                  id: 5,
                  name: 'Nikita'
              },
              {
                  id: 6,
                  name: 'Vadim'
              },
            ],
            newDialogsItem: 'newperson',
        messages:[
          {
              id: 1,
              message: 'hi'
          },
          {
              id: 2,
              message: 'how you'
          },
          {
              id: 3,
              message: 'ouY!'
          },
          {
              id: 4,
              message: 'Yo'
          },
          {
              id: 5,
              message: 'Yo'
          },
          {
              id: 6,
              message: 'yo'
          }
        ],
        newMessageBody: ""

      }, 
      sidebar: {},
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState () {
        return this._state;
    },
     subscribe  (observer) {
        this._callSubscriber = observer;
    },



    dispatch (action) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.MessagesPage = dialogsReducer(this._state.MessagesPage, action)
       this._callSubscriber(this._state);
     
    }
};




  


/* export default store;
window.store = store; */