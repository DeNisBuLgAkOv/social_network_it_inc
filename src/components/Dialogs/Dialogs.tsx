import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css"
import '../../App'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {  DialogsPageType} from "../../redux/dialogs-reducer";




 type Propstype={
    dialogsPage: DialogsPageType
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}


const Dialogs  =(props: Propstype)=>{

    let body = props.dialogsPage.newMessageBody
    let dialogsElements = props.dialogsPage.dialogs.map(el=> <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.dialogsPage.messages.map(el => <Message message ={el.message}/>)

    const onChangeMessage = (e:ChangeEvent<HTMLInputElement>)=>{
        let body = e.target.value
        if(body){
            props.updateNewMessageBody(body)
        }
    }
    const  onSendMessage =()=>{

        props.sendMessage()
    }


    return(
     
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>    
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <input
                             onChange={onChangeMessage}
                              value={body}
                              placeholder="enter message">
                         </input>
                    </div>
                    <div><button onClick={onSendMessage}>Отправить </button> </div>
                </div>
            </div>
        </div>
       
    )

}

export default Dialogs