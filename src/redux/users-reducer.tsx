import React from "react";


export type UsersType = {
    id: number
    followed: boolean
    fullName:string
    status: string
    location: locationPropsType
    photoUrl:string
  }
  


export type locationPropsType = {
    city:string
    country:string
  }

  
  type InitialStateType = {
    users: UsersType[]
  }


let initialState: InitialStateType = {
    users:[
      // { id: 1,photoUrl:"https://438408.selcdn.ru/beonmind/60941cae358b9_unnamed-3.jpg", followed:false, fullName: "Den", status: "boy",location:{city:"Rostov", country:"Moscow"} },
      // { id: 2,photoUrl:"https://438408.selcdn.ru/beonmind/60941cae358b9_unnamed-3.jpg",followed:true ,fullName: "Denis", status: "man",location:{city:"Rostov", country:"Moscow"} },
      // { id: 3,photoUrl:"https://438408.selcdn.ru/beonmind/60941cae358b9_unnamed-3.jpg",followed:true, fullName: "Dimych", status: "boy",location:{city:"Minsk", country:"Belarus"} },
    ]
  }

export const usersReducer =(state=initialState,action: MainActionType)=>{
    switch (action.type) {
        case "FOLLOW":{
              return {
                ...state,
                users: state.users.map(u =>{
                  if(u.id === action.userId){
                    return {...u, followed:true}
                  }
                  return u
                })
              }
        }
        case "UNFOLLOW": {
          return {
            ...state,
            users: state.users.map(u =>{
              if(u.id === action.userId){
                return {...u, followed:false}
              }
              return u
            })
          }
        }
        case "SET_USERS":{
         return {...state, users:[...state.users, ...action.users]}
        }
        default:return state
    }
}
type MainActionType = ReturnType<typeof followAC > | ReturnType<typeof  unFollowAC>| ReturnType<typeof setUsersAC >

export let followAC =(userId:number)=> {
  return {
    type:'FOLLOW', userId
  }as const
  
}

export let unFollowAC =(userId:number)=> {
  return{type :'UNFOLLOW',userId}as const
}


export let setUsersAC = (users:UsersType[])=>{
  return{type:"SET_USERS", users}as const

}