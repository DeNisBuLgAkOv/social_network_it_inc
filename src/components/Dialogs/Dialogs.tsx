import React from "react";
import s from "./Dialogs.module.css"
import '../../App'
import { NavLink } from "react-router-dom";

const Dialogs =()=>{

    return(
     
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">qqqq</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>HDFGSD</div>
                <div className={s.message}>HiSDFDSFSDFDS</div>
            </div>
        </div>
       
    )

}

export default Dialogs