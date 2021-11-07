import React from "react";
import s from "./Dialogs.module.css"
import '../../App'
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";







const Dialogs =()=>{

    return(
     
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name ="andr" id="1"/>
                <DialogItem name ="den" id="2"/>
                <DialogItem name ="dim" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message = "ssss" />
            </div>
        </div>
       
    )

}

export default Dialogs