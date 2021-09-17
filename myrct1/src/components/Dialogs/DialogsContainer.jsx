
import React from 'react';
import {updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import {sendMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

import {connect} from "react-redux"
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';


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



/* let authRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent); */


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);