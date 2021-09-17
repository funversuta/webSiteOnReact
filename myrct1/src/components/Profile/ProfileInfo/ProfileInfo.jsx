import Preloader from '../../common/preloader/preloader';
import classes from'./ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"
const ProfileInfo = (props) => {

  if (!props.profile) {
     return <Preloader />
  }
    return (
      <div> 
      <div className={classes.friend}>
        <img src='https://www.thewrap.com/wp-content/uploads/2016/03/spiderman-civil-war-618x400.jpg' alt='' width ='600'/>
      </div>
      <div className={classes.describBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      
      </div>
      
    </div>
    );
}
export default ProfileInfo;
/* "-^Welcome on My Page ^-" */