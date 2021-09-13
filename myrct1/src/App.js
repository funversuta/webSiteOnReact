
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
/* import store from './redux/reduxStore'; */
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';

import UsersContainer from './components/Users/UsersContainer';
const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
    <Header/>
    <NavBar/>
    {/* <Profile/>  */}
    <div className='app-wrapper-content'>
      <Route path='/dialogs' 
             render={ () => <DialogsContainer  /> } />
      <Route path='/profile' 
             render={ () => <Profile  />} />
      <Route path='/Music' 
             render={ () => <Music AppState={props.AppState.profilePage} />} />
      <Route path='/News' render={Profile} />
      <Route path='/Settings' render={Profile} />
      <Route path='/users' 
             render={ () => <UsersContainer /> } />
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
