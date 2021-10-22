import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'


const MyPosts = ()=>{

    return(
     <div>
        My Post
          <div>
            <textarea></textarea>
            <button>Add Post</button>
            <div className={s.posts}>
                <Posts message = "How are you?"/>
                <Posts message = "How "/>
            </div>
          </div>
      </div>
    )
}

export default MyPosts