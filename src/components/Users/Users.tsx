import React from "react";
import {UsersType} from "../../redux/users-reducer";
import styles from "./users.module.css"
import axios from "axios";
import userPhoto from "../../assets/imges/user.png"

type PropsType ={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:any)=>void
    setCurrentPage:(currentPage:number)=>void
    setUsersTotalCount:(totalCount:number)=>void
    users:UsersType[]
    pageSize: number
    totalUsersCount:number
    currentPage:number
}


class Users extends  React.Component<PropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response.data.totalCount)
            })
        console.log(this.props)
    }


    onPageChanged =(p:number)=>{
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)

            })
    }

    render(){

        let pagesCount =Math.ceil( this.props.totalUsersCount/this.props.pageSize)
        let pages =[]
        for(let i =1; i <=pagesCount; i++){
            pages.push(i)
        }
        console.log(pages)
            return(
                <div>
                    <div>
                            { pages.map(p => {
                                       return <span onClick={()=>{this.onPageChanged(p)} } className={this.props.currentPage ===p ? styles.selectedPage: ""}>{p}</span>
                                 })}
                    </div>
                    {this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{this.props.unfollow(u.id)}}> UNFollow</button>:<button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>

                    </div>)}
                </div>
            )
        }

}

export default Users
