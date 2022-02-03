import React from "react";
import {UsersType} from "../../redux/users-reducer";
import styles from "./users.module.css"
import axios from "axios";
import userPhoto from "../../assets/imges/user.png"

type PropsType ={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:any)=>void
    users:UsersType[]
}


class Users extends  React.Component<PropsType>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render(){
            return(
                <div>

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
