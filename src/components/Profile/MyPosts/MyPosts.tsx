import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'
import { PostsType } from '../../../redux/state'

type PropsType={
  posts:PostsType[]
  addPost:(postMessage:string)=>void
}



const MyPosts: React.FC<PropsType> = (props)=>{


  let postsElements = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/> )

  let newPostElement = React.createRef<HTMLTextAreaElement>()
  let addPost =()=>{
      let text = newPostElement.current?.value
      if(text){
        props.addPost(text)
      }
     
  }


    return(
     <div className={s.postsBlock}>
       <h3>My Post</h3> 
          <div>
            <div>
               <textarea ref={newPostElement}></textarea>
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