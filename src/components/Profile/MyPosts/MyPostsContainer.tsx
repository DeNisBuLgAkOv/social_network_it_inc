import React from 'react'
import { addPostActionCreator, onPostChangeCreator, PostsType } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";




let mapStateToProps =(state:StateType) =>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let  mapDispatchToProps =(dispatch: Dispatch )=>{
    return {
        updateNewPostText:(text:string)=>{
            let action = onPostChangeCreator(text)
            dispatch(action)
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }


}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer