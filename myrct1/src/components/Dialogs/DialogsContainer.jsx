
import React from 'react';
import {updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import {sendMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

import {connect} from "react-redux"


let mapStateToProps = (state) => {
  return {
    MessagesPage: state.MessagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => { 
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;