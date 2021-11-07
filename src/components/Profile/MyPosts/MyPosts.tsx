import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'


type MyPostsType ={
  posts:Array<PostsType>
}

type PostsType ={
  id:number
  message:string
  likeCount:number
}


const MyPosts: React.FC<MyPostsType> = (props)=>{
  // const MyPosts = (props:any)=>{
  // let posts =[
  //   {id:1, message:"hi", likeCount:12},
  //   {id:2, message:"hid", likeCount:12},
  //   {id:3, message:"hifddf", likeCount:20},
  //   {id:4, message:"hisdfdsf", likeCount:14},
  // ]

  let postsElements = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/> )



    return(
     <div className={s.postsBlock}>
       <h3>My Post</h3> 
          <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
          </div>
      </div>
    )
}

export default MyPosts