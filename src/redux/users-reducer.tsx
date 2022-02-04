import React from "react";


export type UsersType = {
    id: number
    followed: boolean
    name:string
    status: string
    location: locationPropsType
    photos:PhotoPropsType
  }
export type PhotoPropsType = {
   small:string
   big:string
}


export type locationPropsType = {
    city:string
    country:string
  }

  
  type InitialStateType = {
    users: UsersType[]
      pageSize: number
      totalUsersCount:number
      currentPage:number
  }


let initialState: InitialStateType = {
    users:[

    ],
    pageSize: 0,
    totalUsersCount:0,
    currentPage:1
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
         return {...state, users:action.users}
        }
        case "SET_CURRENT_PAGE":{
            return {...state,currentPage:action.currentPage }
        }
        case "SET_TOTAL_USERS_COUNT":{
            return {...state,totalUsersCount:action.totalUsersCount }
        }
        default:return state
    }
}
type MainActionType = ReturnType<typeof followAC > | ReturnType<typeof  unFollowAC>
    | ReturnType<typeof setUsersAC > | ReturnType<typeof setCurrentPageAC  > | ReturnType<typeof setUsersTotalCountAC>

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
export let setCurrentPageAC = (currentPage:number)=>{
    return{type:"SET_CURRENT_PAGE", currentPage}as const
}
export let setUsersTotalCountAC = (totalUsersCount:number)=>{
    return{type:"SET_TOTAL_USERS_COUNT",totalUsersCount}as const
}