import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/imges/user.png";
import { NavLink } from 'react-router-dom';
import {UsersType} from "../../redux/users-reducer";

type PropsType ={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    users:UsersType[]
    pageSize: number
    totalUsersCount:number
    currentPage:number
    onPageChanged :(p:number)=>void
}


let Users =(props:PropsType)=>{
    let pagesCount =Math.ceil( props.totalUsersCount/props.pageSize)
    let pages =[]
    for(let i =1; i <=pagesCount; i++){
        pages.push(i)
    }
   console.log(props.totalUsersCount, props.pageSize)
    return(
        (
            <div>
                <div>
                    { pages.map(p => {
                        return <span onClick={()=>{props.onPageChanged(p)} } className={props.currentPage ===p ? styles.selectedPage: ""}>{p}</span>
                    })}
s                </div>
                {props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to= {`/profile/${u.id}`}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}> UNFollow</button>:<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
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
    )
}
export default Users