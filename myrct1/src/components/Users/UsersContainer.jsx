import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/UsersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
     follow: (userid) => {
         dispatch(followAC(userid));
     },
     unfollow: (userid) => {
        dispatch(unfollowAC(userid));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users));
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
