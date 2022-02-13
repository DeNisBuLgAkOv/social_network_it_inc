import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/imges/preloader.svg"

type MSTPType ={
    users: UsersType[]
    pageSize: number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}

type MDTPType = {
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:any)=>void
    setCurrentPage:(currentPage:number)=>void
    setUsersTotalCount:(totalCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
}

type PropsType = MSTPType & MDTPType

class UsersContainer extends  React.Component<PropsType>{
   componentDidMount() {
       this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setUsersTotalCount(response.data.totalCount)
                })
    }


    onPageChanged =(p:number)=>{
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render(){
        return(
            <>
                {this.props.isFetching ? <img src={preloader}/> :null}
                 <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}

                />
            </>
        )
    }

}

const mapStateToProps =(state: StateType) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}
// const mapDispatchToProps =(dispatch: Dispatch)=> {
//     return{
//         follow:(userId:number)=>{
//             dispatch(followAC(userId))
//         },
//         unfollow:(userId:number)=>{
//             dispatch(unFollowAC(userId))
//         },
//         setUsers:(users:UsersType[])=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(currentPage:number)=>{
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUsersTotalCount:(totalCount:number)=>{
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching:(isFetching:boolean)=>{
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }



export default connect(mapStateToProps,{
    follow:followAC,
    unfollow:unFollowAC,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setUsersTotalCount:setUsersTotalCountAC,
    toggleIsFetching:setIsFetchingAC
})(UsersContainer)