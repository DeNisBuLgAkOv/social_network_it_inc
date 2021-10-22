import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile =()=>{
    return(
        <div >
        <div>
            <img src="https://cdn1.ozone.ru/s3/multimedia-a/c1200/6057606094.jpg"/>
        </div>
        <div>
          ava+ description
        </div>
       <MyPosts/>

      </div>
    )
}

export default Profile