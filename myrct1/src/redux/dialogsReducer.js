const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
newMessageBody: ""}


const dialogsReducer = (state = initialState, action) => {
   
    switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body
         };
        
        
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                
                ...state,
                newMessageBody: '',
             messages: [...state.messages, {id: 7, message: body}]
             };
       
       default:
        return state;
   }

}
export const sendMessageCreator = () => {
    return {
      type: 'SEND_MESSAGE',
    }
  };
  
 export const updateNewMessageBodyCreator = (body) => {
    return {
      type: 'UPDATE_NEW_MESSAGE_BODY',
      body: body,
    }
  }


export default dialogsReducer;