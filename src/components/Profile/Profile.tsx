import React from 'react';
import {  ProfilePagePropsType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


type PropsType = {
  updateNewPostText:(newText:string)=>void
  profilePage: ProfilePagePropsType
  addPost:() =>void
}
const Profile =(props:PropsType)=>{
 
    return(
      <div >
          <ProfileInfo/>
          <MyPosts posts={props.profilePage.posts} 
          addPost={props.addPost}
          newPostText= {props.profilePage.newPostText}
          updateNewPostText={props.updateNewPostText}
          />
      </div>
    )
}

export default Profile