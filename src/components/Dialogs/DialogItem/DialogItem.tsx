import React from "react"
import { NavLink } from "react-router-dom"
import { DialogsPropsType } from "../../../redux/dialogs-reducer"

import s from "../Dialogs.module.css"





const DialogItem =(props:DialogsPropsType)=>{

    let path = "/dialogs/"+props.id

    return(
        
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem