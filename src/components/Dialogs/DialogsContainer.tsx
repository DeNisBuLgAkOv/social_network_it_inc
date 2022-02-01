
import { Dispatch } from "redux";
import Dialogs from "./Dialogs";
import {DialogsPageType, SendMessageActionCreator, UpdateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import React from "react";



let mapStateToProps =(state:StateType) =>{
    return{
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps =(dispatch: Dispatch)=>{
    return{
        updateNewMessageBody:(body:string)=>{
            dispatch(UpdateNewMessageBodyAC(body))
        },
        sendMessage:()=>{
            dispatch(SendMessageActionCreator())
        }
    }
}



const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer