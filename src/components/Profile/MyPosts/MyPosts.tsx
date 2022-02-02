import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'
import {  PostsType } from '../../../redux/profile-reducer'


type PropsType={
  posts:PostsType[]
  newPostText:string
   addPost:()=>void
   updateNewPostText:(text:string)=>void
}


const MyPosts= (props:PropsType)=>{

  let postsElements = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/> )

  let newPostElement = React.createRef<HTMLTextAreaElement>()
  let addPost =()=>{
      props.addPost()
  }

  let onPostChange =()=>{
        let text = newPostElement.current?.value
        if(text){
           props.updateNewPostText(text)
        }
       
       
     }

    return(
     <div className={s.postsBlock}>
       <h3>My Post</h3> 
          <div>
            <div>
               <textarea ref={newPostElement} value ={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
               <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
          </div>
      </div>
    )
}

export default MyPosts