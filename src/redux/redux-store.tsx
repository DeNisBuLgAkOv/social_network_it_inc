import React from 'react'
import { combineReducers, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'



let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})

 let store = createStore(reducers)
export type StateType = ReturnType<typeof reducers>;



 export default store