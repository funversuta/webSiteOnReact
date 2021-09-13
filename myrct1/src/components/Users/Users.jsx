import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    
   if (props.users.length === 0){

    


    props.setUsers( [
      { id: 1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TW-ZLNbufG9mL7tFXoB1Jgfu2I6qaEjEFg&usqp=CAU', followed: false, Fullname: 'Dmitry' , status: 'iam ironman', location: {city:'Minsk', country: 'Belarus'} },
      { id: 2, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TW-ZLNbufG9mL7tFXoB1Jgfu2I6qaEjEFg&usqp=CAU', followed: true, Fullname: 'Sange' , status: 'iam genius', location: {city:'Moscow', country: 'Russia'} },
      { id: 3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TW-ZLNbufG9mL7tFXoB1Jgfu2I6qaEjEFg&usqp=CAU', followed: false, Fullname: 'Yasha' , status: 'iam billioner', location: {city:'LA', country: 'USA'} }
    ]
    )
   }
    return <div>
       {
       props.users.map(u => <div key={u.id}>
       <span>
           <div>
               <img src={u.photoUrl} className={styles.userPhoto} />
           </div>
           <div>
               {u.followed 
               ?  <button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>
               :  <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
              
           </div>
       </span>
       <span>
        <span> 
           <div>{u.fullname}</div>
           <div>{u.status}</div>
        </span>
        <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
        </span>
       </span>
       </div>)
       }
    </div>
}

export default Users;