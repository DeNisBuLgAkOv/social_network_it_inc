import React from "react";
import s from "./Dialogs.module.css"
import '../../App'

const Dialogs =()=>{

    return(
     
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Andrey
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