import React from 'react';
import { ProfilePagePropsType } from '../../redux/profile-reducer';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile =()=>{
 
    return(
      <div >
          <ProfileInfo/>
          <MyPostsContainer  />
      </div>
    )
}

export default Profile