import React from "react";
import {UsersType} from "../../redux/users-reducer";
import styles from "./users.module.css"


type PropsType ={
    users:UsersType[]
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:any)=>void
}




const Users =(props:PropsType)=>{
    if(props.users.length ===0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: "https://438408.selcdn.ru/beonmind/60941cae358b9_unnamed-3.jpg",
                    followed: false,
                    fullName: "Den",
                    status: "boy",
                    location: {city: "Rostov", country: "Moscow"}
                },
                {
                    id: 2,
                    photoUrl: "https://438408.selcdn.ru/beonmind/60941cae358b9_unnamed-3.jpg",
                    followed: true,
                    fullName: "Denis",
                    status: "man",
                    location: {city: "Rostov", country: "Moscow"}
                },
                {
                    id: 3,
                    photoUrl: "https://438408.selcdn.ru/beonmind/60941cae358b9_unnamed-3.jpg",
                    followed: true,
                    fullName: "Dimych",
                    status: "boy",
                    location: {city: "Minsk", country: "Belarus"}
                },

            ])
    }
    return(
        <div>
            {props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}> UNFollow</button>:<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>

                </div>)}
        </div>
    )
}

export default  Users