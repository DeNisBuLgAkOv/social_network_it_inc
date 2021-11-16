import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {addPost, StatePropsType, updateNewPostText} from "./redux/state"


export let rerenderEntireTree =(state:StatePropsType)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}  addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


