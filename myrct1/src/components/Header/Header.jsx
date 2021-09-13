import classes from'./Header.module.css' 

const Header = () => {
    return (
        <header className={classes.header}> 
        <div className={classes.item}>
      <img src = 'https://cdn.logo.com/hotlink-ok/logo-social.png'/* alt='' width = '200px' *//>
      </div>
    </header> 
    );
}
export default Header;