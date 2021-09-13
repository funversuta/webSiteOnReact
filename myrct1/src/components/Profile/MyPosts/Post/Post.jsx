  import classes from'./Post.module.css';
const Post = (props) => {
    return (
      <div className={classes.item}>
        <img src='https://pbs.twimg.com/profile_images/1222646977332174849/xWcD6t_Q.jpg'/>
        {props.message}
        <div>

    <h4>  <span>like </span>
      {props.countLike}
      <span> dislike</span>
      {props.countDislike}</h4>
      </div>
    </div>
    );
}
export default Post;