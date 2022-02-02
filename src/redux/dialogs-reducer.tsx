import React from "react";


export type DialogsPropsType = {
  id: number
  name: string
}

export type MessagesPropsType = {
  id: number
  message: string
}

export type DialogsPageType = {
  dialogs: Array<DialogsPropsType>
  messages: Array<MessagesPropsType>
  newMessageBody:string
}




let initialState:DialogsPageType ={
  dialogs: [
    { id: 1, name: "Dimysh" },
    { id: 2, name: "Den" },
    { id: 3, name: "ArtЁm" },
    { id: 4, name: "Slava" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hisdvsd" },
    { id: 3, message: "Hidsfdsfsdfdsf" },
    { id: 4, message: "Hisdfsdfsdfsdfsdfsdf" },
  ],
  newMessageBody:""
}


export const dialogsReducer =(state=initialState,action: MainActionType)=>{
      
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":{
           return {
            ...state, 
            newMessageBody: action.body
           }
        }
        case "SEND-MEASSAGE" :{
          let body = state.newMessageBody
          return {
            ...state, 
               newMessageBody:"",
              message:[...state.messages,{id:6, message:body}]
          }
        }
        default:return state
  
      }


}

type MainActionType = ReturnType<typeof SendMessageActionCreator> |ReturnType<typeof  UpdateNewMessageBodyAC>

export let SendMessageActionCreator = ()=>{
    return{
       type:"SEND-MEASSAGE"
    }as const
  }
  export let UpdateNewMessageBodyAC = (body:string)=>{
    return{
       type:"UPDATE-NEW-MESSAGE-BODY",
       body:body
    }as const
  }