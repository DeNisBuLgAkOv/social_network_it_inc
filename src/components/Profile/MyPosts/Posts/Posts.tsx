import React from 'react'
import s from './Posts.module.css'

type PostType ={
    message:string
    likeCount:number
}

const Posts: React.FC<PostType> = (props)=>{

    return(   
        <div className={s.item}>
            <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"/>
              {props.message}
               <div>
                   <span>like</span>
               </div>
        </div>   
    )
}

export default Posts