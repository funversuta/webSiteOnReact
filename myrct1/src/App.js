
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
/* import store from './redux/reduxStore'; */

import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/LoginPage';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DancePage from './components/sliderPage/DancePage';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
    <HeaderContainer />
    <NavBar/>
    <div className='app-wrapper-content'>
      <Route path='/dialogs' 
             render={ () => <DialogsContainer  /> } />
      <Route path='/profile/:userId?' 
             render={ () => <ProfileContainer  />} />
      <Route path='/News' render={Profile} />
      <Route path='/SuperHeroDance' 
             render={DancePage} />
      <Route path='/users' 
             render={ () => <UsersContainer /> } />
      <Route path='/login' 
             render={ () => <Login /> } />
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
