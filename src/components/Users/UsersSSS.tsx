import React from "react";
import {UsersType} from "../../redux/users-reducer";
import styles from "./users.module.css"
import axios from "axios";
import userPhoto from "../../assets/imges/user.png"

type PropsType ={
    users:UsersType[]
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:any)=>void
}

const UsersSSS =(props:PropsType)=>{

    let getUsers = ()=>{
        if(props.users.length ===0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response =>{
                    props.setUsers(response.data.items)
                })
    }



    }
    return(
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
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
}

export default  UsersSSS