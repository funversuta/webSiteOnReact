import classes from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div> 
      <div>
        <img src='http://cdn.mos.cms.futurecdn.net/5cF7irCA4hbkkLv5FxiQoH.jpg' alt='' width ='1200px'/>
      </div>
      <div className={classes.describBlock}>
      <h1> Welcome on Portal</h1>
      </div>
      
    </div>
    );
}
export default ProfileInfo;