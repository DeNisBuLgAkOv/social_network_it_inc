import React from 'react'
import './App.css'
import {BrowserRouter,Route} from "react-router-dom"
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { StatePropsType } from './redux/state';

type PropsType={
  state: StatePropsType
  addPost:()=>void
  updateNewPostText:(newText:string)=>void
}
  
function App(props:PropsType) {
  return (
   <BrowserRouter>
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app_wrapper_content">
            <Route path ="/dialogs" render={()=><Dialogs  dialogsPage= {props.state.dialogsPage}  />}/>
            <Route path="/profile" render={()=><Profile
             profilePage= {props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
              />}/>
          </div>

      </div>
      </BrowserRouter> 
  );
}

export default App;
