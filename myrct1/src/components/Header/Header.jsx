import { NavLink } from 'react-router-dom';
import classes from'./Header.module.css' 
import React from 'react';
/* class LinkToLogin extends React.Component {
  render(){
  return (<NavLink to={'/login'}>Log out</NavLink>)
  }}
 */
const Header = (props) => {
    return (
        <header className={classes.header}> 
        <div className={classes.item}>
      <img src = 'https://cdn.logo.com/hotlink-ok/logo-social.png'/* alt='' width = '200px' *//>

      <div className={classes.loginBlock}> 
      {props.isAuth ? <div>{props.login}  <NavLink to={'/login'}>Log out</NavLink> </div> /* <button onClick={LinkToLogin}>Log out</button> </div> */
      : <NavLink to={'/login'}>Login</NavLink>}
      </div>
      </div>
    </header> 
    );
}
export default Header;