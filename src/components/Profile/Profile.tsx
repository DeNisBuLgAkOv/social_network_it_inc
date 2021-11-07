import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile =()=>{
  let posts =[
    {id:1, message:"hi", likeCount:12},
    {id:2, message:"hid", likeCount:12},
    {id:3, message:"hifddf", likeCount:20},
    {id:4, message:"hisdfdsf", likeCount:14},
  ]
    return(
      <div >
          <ProfileInfo/>
          <MyPosts posts={posts}/>
      </div>
    )
}

export default Profile