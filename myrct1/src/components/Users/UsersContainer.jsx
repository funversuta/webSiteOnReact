import React from "react";
import { connect } from "react-redux";
import { follow, unfollow,  setCurrentPage, toogleFollowingProgress, getUsers} from "../../redux/UsersReducer";
import Users from "./Users";
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';

import Preloader from "../common/preloader/preloader";
import { compose } from "redux";
class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    } 

     onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
     }


    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}


/* export default connect(mapStateToProps,  {follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers})(UsersContainer); */

export default compose(connect(mapStateToProps,  {follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers}),withAuthRedirect)(UsersContainer)