import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

const mapStateToProps =(state:StateType)=>{
    return{
        users: state.usersPage.users
    }
}
const mapDispatchToProps =(dispatch:Dispatch)=>{
    return{
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:UsersType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Users)