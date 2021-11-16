import React from "react";
import { rerenderEntireTree } from "../render";



export  type DialogsPropsType={
    id:number
    name:string
  }
  
export  type MessagesPropsType={
    id:number 
    message:string
  }
  
 export  type PostsType ={
    id:number
    message:string
    likeCount:number
  }


  
export type ProfilePagePropsType={
  posts:  Array<PostsType>
}

export type ProfilePropstype={
  profilePage:ProfilePagePropsType
}
export type DialogsPageType={
  dialogs:Array<DialogsPropsType>
  messages:Array<MessagesPropsType>
}

export type StatePropsType={
  profilePage: ProfilePagePropsType
  dialogsPage: DialogsPageType
}

export type MainStateType={
  state:StatePropsType
}
  
  let state: StatePropsType={
    profilePage:{
      posts :[
        {id:1, message:"hi", likeCount:12},
        {id:2, message:"hid", likeCount:12},
        {id:3, message:"hifddf", likeCount:20},
        {id:4, message:"hisdfdsf", likeCount:14},
      ]
    },
    dialogsPage:{
      dialogs :[
        {id:1, name:"Dimysh"},
        {id:2, name:"Den"},
        {id:3, name:"Anton"},
        {id:4, name:"Slava"},
    ],
     messages :[
        {id:1, message:"Hi"},
        {id:2, message:"Hisdvsd"},
        {id:3, message:"Hidsfdsfsdfdsf"},
        {id:4, message:"Hisdfsdfsdfsdfsdfsdf"},
    ],
    }
  }



 export let addPost =(postMessage:string)=>{
    let newPost:PostsType={
      id:5,
      message:postMessage,
      likeCount:0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
  }

  export default state