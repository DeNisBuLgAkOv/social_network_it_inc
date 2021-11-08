import React from "react";
import s from "./Dialogs.module.css"
import '../../App'
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogsPageType } from "../../redux/state";


type Propstype={
    dialogsPage: DialogsPageType
}


const Dialogs  =(props:Propstype)=>{


    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)

    let messagesElements = props.dialogsPage.messages.map(el => <Message message ={el.message}/>)

    return(
     
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>    
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
       
    )

}

export default Dialogs