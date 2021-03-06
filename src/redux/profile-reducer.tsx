import React from "react";


export type PostsType = {
    id: number
    message: string
    likeCount: number
  }
  

export type ProfilePagePropsType = {
    posts: Array<PostsType>
    newPostText: string
  }
  



let initialState:ProfilePagePropsType={
    posts: [
      { id: 1, message: "hi", likeCount: 12 },
      { id: 2, message: "hid", likeCount: 12 },
      { id: 3, message: "hifddf", likeCount: 20 },
      { id: 4, message: "hisdfdsf", likeCount: 14 },
    ],
    newPostText: ""

  }

export const profileReducer =(state=initialState,action: MainActionType)=>{
    switch (action.type) {
        case"ADD-POST":{
            return  {
              ...state,
                newPostText :"",
               posts:[...state.posts,{id: 5,message: state.newPostText, likeCount: 0}]
            }
        }

        case "UPDATE-NEW-POST-TEXT": {
            return  {
              ...state,newPostText : action.newText
            
            }
        }
        default:return state
    }
}
type MainActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof  onPostChangeCreator>

export let addPostActionCreator = ()=>{
    return{
       type:"ADD-POST"
    }as const
  }
  
  export let onPostChangeCreator = (text:string)=>{
    return{
       type:"UPDATE-NEW-POST-TEXT", newText:text
    }as const
  }
  