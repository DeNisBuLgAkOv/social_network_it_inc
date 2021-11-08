import React from 'react';
import {  ProfilePagePropsType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


type PropsType = {
  profilePage: ProfilePagePropsType
}
const Profile =(props:PropsType)=>{
 
    return(
      <div >
          <ProfileInfo/>
          <MyPosts posts={props.profilePage.posts}/>
      </div>
    )
}

export default Profile